import { Component , EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Products } from 'src/app/shared/interface/products';
import { StaticPrpductService } from './../../shared/service/static-prpduct.service';
import { StaticCartService } from './../../shared/service/static-cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnChanges {
  prodList: Products[];

  @Input() receivedCatId: number = 0
  @Output() onTotalPriceChanged: EventEmitter<number>;
  orderTotalPrice: number = 0;

  constructor(private ProductService: StaticPrpductService , private cartService:StaticCartService) {
    this.onTotalPriceChanged = new EventEmitter<number>();
    this.prodList = this.ProductService.getProductByCatId(this.receivedCatId)
  }
  
  ngOnChanges(): void {
    this.prodList = this.ProductService.getProductByCatId(this.receivedCatId);
  }

  count(prodId:number,prodName:string,prodPrice: number, count: number){
    this.orderTotalPrice += prodPrice * count;
    this.onTotalPriceChanged.emit(this.orderTotalPrice);
    this.cartService.updateCart(prodName, prodPrice , prodId);
  }
}
