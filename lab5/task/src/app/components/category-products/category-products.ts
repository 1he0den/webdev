import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/model';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [CommonModule, ProductItem],
  templateUrl: './category-products.html',
  styleUrls: ['./category-products.css']
})
export class CategoryProducts {
  products = input.required<Product[]>();
  like = output<number>();
  delete = output<number>();

  onLike(productId: number): void {
    this.like.emit(productId);
  }

  onDelete(productId: number): void {
    this.delete.emit(productId);
  }
}
