import { Component, inject, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductsService, IProduct } from '../../services/products-service';

@Component({
  selector: 'app-product-two',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-two.html',
  styleUrl: './product-two.scss',
})
export class ProductTwo implements OnInit {
  private _productsService = inject(ProductsService);
  
  product?: IProduct;
  selectedSize: string = '';
  isDetailsOpen: boolean = false;
  availableSizes: string[] = ['PP', 'P', 'M', 'G', 'GG'];

  ngOnInit(): void {
    this.product = this._productsService.getProductById(2);
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }

  toggleDetails(): void {
    this.isDetailsOpen = !this.isDetailsOpen;
  }
}