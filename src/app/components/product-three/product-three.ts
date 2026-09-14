import { Component, inject, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductsService, IProduct } from '../../services/products-service';

@Component({
  selector: 'app-product-three',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-three.html',
  styleUrl: './product-three.scss',
})
export class ProductThree implements OnInit {
  private _productsService = inject(ProductsService);
  
  product?: IProduct;
  selectedSize: string = '';
  isDetailsOpen: boolean = false;
  availableSizes: string[] = ['PP', 'P', 'M', 'G', 'GG'];

  ngOnInit(): void {
    this.product = this._productsService.getProductById(3);
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }

  toggleDetails(): void {
    this.isDetailsOpen = !this.isDetailsOpen;
  }
}