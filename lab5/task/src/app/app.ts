import { Component, signal } from '@angular/core';
import { CategoryNav } from './components/category-nav/category-nav';
import { CategoryProducts } from './components/category-products/category-products';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [CategoryNav, CategoryProducts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedCategoryId = signal<number | null>(null);
  filteredProducts = signal([] as any[]);

  constructor(private productService: ProductService) {
    this.filteredProducts.set(this.productService.getProductsByCategory(null));
  }

  onCategorySelected(categoryId: number | null): void {
    this.selectedCategoryId.set(categoryId);
    this.filteredProducts.set(this.productService.getProductsByCategory(categoryId));
  }

  onLikeProduct(productId: number): void {
    this.productService.likeProduct(productId);
    // Refresh filtered products to reflect the change
    this.filteredProducts.set(this.productService.getProductsByCategory(this.selectedCategoryId()));
  }

  onDeleteProduct(productId: number): void {
    this.productService.deleteProduct(productId);
    // Refresh filtered products to reflect the change
    this.filteredProducts.set(this.productService.getProductsByCategory(this.selectedCategoryId()));
  }
}
