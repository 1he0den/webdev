import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItem {
  product = input.required<Product>();
  like = output<number>();
  delete = output<number>();

  onLike(): void {
    this.like.emit(this.product().id);
  }

  onDelete(): void {
    this.delete.emit(this.product().id);
  }
}
