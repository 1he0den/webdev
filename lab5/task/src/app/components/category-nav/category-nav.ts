import { Component, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../models/model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-category-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-nav.html',
  styleUrls: ['./category-nav.css']
})
export class CategoryNav {
  categorySelected = output<number | null>();
  selectedCategoryId: number | null = null;

  categories = signal<Category[]>([]);

  constructor(private productService: ProductService) {
    this.categories.set(this.productService.getCategories()());
  }

  selectCategory(categoryId: number | null): void {
    this.selectedCategoryId = categoryId;
    this.categorySelected.emit(categoryId);
  }
}
