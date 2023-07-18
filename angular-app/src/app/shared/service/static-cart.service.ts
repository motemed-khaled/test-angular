import { Injectable } from '@angular/core';
import { Cart } from '../interface/cart';

@Injectable({
  providedIn: 'root'
})
export class StaticCartService {
  cartList!: Cart[] ;
  constructor() {
    this.cartList = [];
  }

  getAllCartItem(): Cart[]{
    return this.cartList;
  }

  updateCart(prdName: string, price: number , prodId:number) {
    this.cartList.push({ name: prdName, price: price, quantity: 1 , id:prodId });
 }
}
