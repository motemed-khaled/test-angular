import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { ProductService } from './../../service/product.service';
import { CatogryService } from 'src/app/module/home/service/catogry.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent {

  @Input() allProduct!:Observable<Product[]>;
  constructor(private readonly productService: ProductService,
    private readonly catogryService:CatogryService) {
  }

  deleteOne(id:number) {
    this.productService.deleteProduct(id);
    this.catogryService.deleteCatogry(3)
  }
}
