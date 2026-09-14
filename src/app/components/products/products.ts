import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ProductsService, IProduct } from '../../services/products-service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products implements OnInit {
  private _productsService = inject(ProductsService);
  products: IProduct[] = [];

  ngOnInit(): void {
    this.products = this._productsService.getProducts();
  }

  getProductRoute(id: number): string {
    const routesMap: Record<number, string> = {
      1: '/product-one',
      2: '/product-two',
      3: '/product-three'
    };

    return routesMap[id] || `/product-${id}`;
  }
}