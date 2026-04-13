from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.products_list),
    path('products/active/', views.is_active),
    path('products/<int:product_id>/', views.product_detail),
    path('categories/', views.categories_list),
    path('categories/<int:id>/', views.category_detail),
    path('categories/<int:id>/products/', views.category_products),
    path('products/create/', views.create_product),
    path('categories/create/', views.create_category),
]