import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/interface/product';

@Injectable({providedIn:"root"})

export class ProductService {
  allProduct:BehaviorSubject<Product[]>
  constructor() {
   this.allProduct = new BehaviorSubject<Product[]>([
      {name:"hp" , price:1000 , id:10 , catogryId:5 , img:"https://placehold.co/200x200/000000/FFFFFF.png"},
        {name:"dell" , price:1000 , id:11 , catogryId:5 , img:"https://placehold.co/200x200/000000/FFFFFF.png"},
        {name:"lenovo" , price:2000 , id:105 , catogryId:5 , img:"https://placehold.co/200x200/000000/FFFFFF.png"},
        {name:"tablet" , price:1000 , id:102 , catogryId:4 , img:"https://placehold.co/200x200/000000/FFFFFF.png"},
        {name:"ipad" , price:5000 , id:106 , catogryId:4 , img:"https://placehold.co/200x200/000000/FFFFFF.png"},
        {name:"smart watch" , price:800 , id:109 , catogryId:3 , img:"https://placehold.co/200x200/000000/FFFFFF.png"},
        {name:"watch" , price:1000 , id:111 , catogryId:3 , img:"https://placehold.co/200x200/000000/FFFFFF.png"},
    ])
  }

  getAllProduct():BehaviorSubject<Product[]> {
    return this.allProduct;
  }

  getProductById(id:number): Product{
    return this.allProduct.value.filter(pro => pro.id == id)[0];
  }

  getProductByName(name:string): BehaviorSubject<Product[]>{
   return new BehaviorSubject<Product[]>(this.allProduct.value.filter(pro => pro.name == name))

  }

  getProductByCatId(id: number): Product[]{
    return this.allProduct.value.filter(pro => pro.catogryId == id);
  }

  deleteProduct(id: number):void{
    this.allProduct.next(this.allProduct.value.filter(pro => pro.id !== id));
    console.log(this.allProduct.value)
  }

  updateProduct(id: number, newData:Partial<Product>):void{
    const index = this.allProduct.value.findIndex(pro => pro.id == id);

      this.allProduct.value[index] = { ...this.allProduct.value[index], ...newData };
  }

  createProduct(newProduct:Product) {
    this.allProduct.next([...this.allProduct.value , newProduct]);
  }

}
