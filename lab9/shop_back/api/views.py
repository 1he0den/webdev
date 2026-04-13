from .models import Category, Product
from rest_framework import viewsets, status # type: ignore
from rest_framework.decorators import action # type: ignore
from rest_framework.response import Response # type: ignore
from .serializers import CategorySerializer, ProductSerializer

# Create your views here.

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    @action(detail=True, methods=["get"], url_path="products")
    def products(self, request, **kwargs):
        category = self.get_object()
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    @action(detail=False, methods=["post"], url_path="buy")
    def buy(self, request):

        product_name = request.data.get("name")
        buy_count = request.data.get("count")

        product = Product.objects.get(name=product_name)

        if product_name not in Product.objects.values_list("name", flat=True):
            return Response(
                {"error": f"Товар с названием {product_name} не найден"},
                status=status.HTTP_404_NOT_FOUND
            )

        if product.count < buy_count:
            return Response(
                {"error": f"Недостаточно товара. В наличии: {product.count}, запросили: {buy_count}"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        if buy_count <= 0:
            return Response(
                {"error": f"Количество должно быть больше нуля"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        total_sum = product.price * buy_count
        
        request.session["pending_order"] = {
            "product_id": product.id,
            "product_name": product.name,
            "count": buy_count,
            "price": product.price,
            "total_sum": total_sum,
            "status": "pending"
        }
        
        return Response(
            {
                "message": "Товар добавлен в корзину",
                "pending_order": request.session["pending_order"]
            },
            status=status.HTTP_200_OK
        )
    
    @action(detail=False, methods=["post"], url_path="checkout")
    def checkout(self, request):
        pending_order = request.session.get("pending_order")
        
        return Response(
            {
                "checkout_info": {
                    "product_name": pending_order["product_name"],
                    "count": pending_order["count"],
                    "price_per_item": pending_order["price"],
                    "total_sum": pending_order["total_sum"]
                },
                "message": "Для завершения покупки, отправьте запрос на /api/products/verify/ с ответом (yes или no)"
            },
            status=status.HTTP_200_OK
        )
    
    @action(detail=False, methods=["post"], url_path="verify")
    def verify(self, request):

        answer = request.data.get("answer", "").lower()
        pending_order = request.session.get("pending_order")
        
        if answer == "no":
            request.session.pop("pending_order", None)
            return Response(
                {
                    "purchase_status": "cancelled",
                    "message": "Покупка отменена"
                },
                status=status.HTTP_200_OK
            )
        
        try:
            product = Product.objects.get(id=pending_order["product_id"])
            buy_count = pending_order["count"]
            
            if product.count < buy_count:
                request.session.pop("pending_order", None)
                return Response(
                    {"error": f"Товар закончился. В наличии осталось: {product.count}"},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            product.count -= buy_count
            product.save()
            
            request.session.pop("pending_order", None)
            
            return Response(
                {
                    "purchase_status": "success",
                    "message": "Покупка успешно завершена!",
                    "order_details": {
                        "product_name": pending_order["product_name"],
                        "quantity": buy_count,
                        "total_sum": pending_order["total_sum"]
                    }
                },
                status=status.HTTP_200_OK
            )
        
        except Product.DoesNotExist:
            request.session.pop("pending_order", None)
            return Response(
                {"error": f"Товар с названием {pending_order['product_name']} больше не существует"},
                status=status.HTTP_404_NOT_FOUND
            )