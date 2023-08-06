import { Component } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { ProductService } from './service/product.service';
import { Observable } from 'rxjs';
import { CatogryService } from '../home/service/catogry.service';
import { Catogry } from 'src/app/interface/catogry';
import { uid } from "uid";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent {
  products: Observable<Product[]>
  allCatogry:Observable<Catogry[]>
  name: string = "";
  price: number = 0;
  catName: string = "select catogry name";


  constructor(private productService: ProductService,
  private readonly catogryService:CatogryService) {
    this.products = this.productService.getAllProduct();
    console.log(this.products)
    this.allCatogry = this.catogryService.getAllCatogry()
  }

  addproduct() {
    this.productService.createProduct({
      name: this.name,
      price: this.price,
      id:parseInt( uid()),
      img: "https://placehold.co/200x200/000000/FFFFFF.png",
      catogryId:parseInt(this.catName)
    })
  }

  serach(value: string) {
    if (value === "") {
      this.products = this.productService.getAllProduct()
    } else {
      this.products = this.productService.getProductByName(value)
    }
  }

}
