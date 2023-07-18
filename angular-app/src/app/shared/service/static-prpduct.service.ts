import { Injectable } from '@angular/core';
import { Products } from '../interface/products';
import { StaticCartService } from './static-cart.service';
import { Cart } from './../interface/cart';

@Injectable({
  providedIn: 'root'
})
export class StaticPrpductService {

  private productList: Products[];
  constructor() {
    this.productList = [
      {name:" lenovo laptop" , id:101 , price:500 , quantity:10,catId:25 , img:"assets/cat-1.jpg"},
      {name:" dell laptop" , id:10 , price:500 , quantity:10,catId:25 , img:"assets/cat-3.jpg"},
      {name:" hp laptop" , id:15 , price:500 , quantity:10,catId:25 , img:"assets/cat-4.jpg"},
      {name:" samsung tap" , id:18 , price:500 , quantity:10,catId:20 , img:"assets/product-2.jpg"},
      {name:" mac tap" , id:122 , price:500 , quantity:10,catId:20 , img:"assets/product-3.jpg"},
      {name:" smart lcd" , id:150 , price:500 , quantity:10,catId:30 , img:"assets/product-4.jpg"},
      {name:" samsung lcd" , id:11 , price:500 , quantity:10,catId:30 , img:"assets/product-5.jpg"}
    ]
  }

  getAllProduct(): Products[]{
    return this.productList;
  }

  getSpecificProduct(pId:number): Products[]|null{
    let product = this.productList.filter(prod => prod.id == pId);
    if (product.length == 0) {
      return null;
    }
    return product;
  }

  getProductByCatId(catId: number) {
    if (catId == 0) {
      return this.productList;
    }
    let product = this.productList.filter(prod => prod.catId == catId);
    return product;
  }

  getProdIds():number[] {
    let prodIds: number[] = this.productList.map(prod => prod.id);
    return prodIds;
  }


}
