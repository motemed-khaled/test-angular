import { Component, Input } from '@angular/core';
import { Catogries } from 'src/app/shared/interface/catogries';
import { StaticCatogryService } from 'src/app/shared/service/static-catogry.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  catogryList: Catogries[];
  @Input() selectedCatId: number = 0;
  orderPrice: number;

  constructor(private catogryService: StaticCatogryService) {
    this.orderPrice = 0;
    this.catogryList = this.catogryService.getAllCatogery();
  }

  onTotalPriceChanged(orderTotalPrice:number) {
    this.orderPrice = orderTotalPrice;
  }

}
