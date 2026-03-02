import { Component } from '@angular/core';
import { ProductCard } from '../card/card';
import { Product } from '../../models/model';
import { products } from '../../../data/product';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = products;
}
