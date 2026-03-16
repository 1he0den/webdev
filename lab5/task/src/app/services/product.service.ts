import { Injectable, signal } from '@angular/core';
import { Product, Category } from '../models/model';
import { products, categories } from '../../data/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsSignal = signal<Product[]>(products);
  private categoriesSignal = signal<Category[]>(categories);

  getProducts() {
    return this.productsSignal.asReadonly();
  }

  getCategories() {
    return this.categoriesSignal.asReadonly();
  }

  getProductsByCategory(categoryId: number | null): Product[] {
    if (categoryId === null) {
      return this.productsSignal();
    }
    return this.productsSignal().filter(p => p.categoryId === categoryId);
  }

  likeProduct(productId: number): void {
    this.productsSignal.update(products => 
      products.map(p => 
        p.id === productId ? { ...p, likes: p.likes + 1 } : p
      )
    );
  }

  deleteProduct(productId: number): void {
    this.productsSignal.update(products => 
      products.filter(p => p.id !== productId)
    );
  }
}
