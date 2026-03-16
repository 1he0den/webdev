import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Product } from '../../models/model';


@Component({
  selector: 'app-card',
  imports: [DecimalPipe],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class ProductCard {
  @Input() product!: Product;

  selectedImage!: string;

  ngOnInit(): void{
    this.selectedImage = this.product.image;
  }

  setImage(url: string): void {
    this.selectedImage = url;
  }

  getStars(): {filled: boolean}[] {
    const full = Math.floor(this.product.rating);
    const stars = Array.from({ length: 5 }, (_, i) => ({ filled: i < full }));
    return stars;
  }

  shareWhatsApp(): void {
    const text = `Check out this product: ${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  shareTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}
