import { Injectable } from '@angular/core';

export interface IProduct {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  stock: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: IProduct[] = [
    {
      id: 1,
      name: "TÊNIS NIKE AIR FORCE 1 '07",
      image:
        'https://imgnike-a.akamaihd.net/1300x1300/01113751.jpg',
      description:
        'O brilho vive no Nike Air Force 1 ’07, o ícone do basquete que dá um toque de frescor ao que você conhece melhor: sobreposições duráveis, acabamentos limpos e a quantidade certa de brilho para fazer você se destacar.',
      price: 799.99,
      stock: 8,
    },
    {
      id: 2,
      name: 'TÊNIS NIKE AIR MAX 90',
      image:
        'https://imgnike-a.akamaihd.net/1920x1920/0093187T.jpg',
      description:
        'Nada é tão voador, nada é tão confortável, nada é tão provado. O Nike Air Max 90 permanece fiel às suas raízes com o icônico solado Waffle, sobreposições costuradas e detalhes em TPU clássicos.',
      price: 899.99,
      stock: 5,
    },
    {
      id: 3,
      name: 'TÊNIS NIKE DUNK LOW RETRO',
      image:
        'https://imgnike-a.akamaihd.net/1300x1300/01633351.jpg',
      description:
        'Criado para as quadras, mas levado para as ruas, o ícone do basquete dos anos 80 retorna com detalhes clássicos e um toque vintage. A boca acolchoada de cano baixo permite que você jogue em qualquer lugar com conforto.',
      price: 899.99,
      stock: 3,
    },
  ];

  getProducts(): IProduct[] {
    return this.products;
  }

  getProductById(id: number): IProduct | undefined {
    return this.products.find((p) => p.id === id);
  }
}