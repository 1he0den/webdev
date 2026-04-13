import json
from django.shortcuts import render
from .models import Category, Product
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

def products_list(request):
    products = Product.objects.filter(is_active=True)
    data = []

    for p in products:
        data.append({
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "category_id": p.category.id
        })

    return JsonResponse(data, safe=False)

def is_active(request):
    products = Product.objects.filter(is_active = True)
    data = []

    for p in products:
        data.append({
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "category_id": p.category.id
        })

    return JsonResponse(data, safe=False)

def product_detail(request, product_id):
    p = Product.objects.get(id=product_id)
    data = {
        "id": p.id,
        "name": p.name,
        "price": p.price,
        "description": p.description,
        "count": p.count,
        "is_active": p.is_active,
        "category_id": p.category.id
    }

    return JsonResponse(data)

@csrf_exempt
def create_product(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        product = Product.objects.create(
            name=data.get('name'),
            price=data.get('price'),
            description=data.get('description'),
            count=data.get('count'),
            is_active=data.get('is_active', True),
            category_id=data.get('category_id')
        )
        return JsonResponse({
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "description": product.description,
            "count": product.count,
            "is_active": product.is_active,
            "category_id": product.category.id
        })

@csrf_exempt   
def create_category(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        category = Category.objects.create(name=data.get('name'))
        return JsonResponse({"id": category.id, "name": category.name})

def categories_list(request):
    categories = Category.objects.all()
    data = []

    for c in categories:
        data.append({
            "id": c.id,
            "name": c.name
        })

    return JsonResponse(data, safe=False)

def category_detail(request, id):
    c = Category.objects.get(id=id)
    data = {
        "id": c.id,
        "name": c.name
    }

    return JsonResponse(data)

def category_products(request, id):
    products = Product.objects.filter(category_id=id)
    data = []

    for p in products:
        data.append({
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
        })

    return JsonResponse(data, safe=False)