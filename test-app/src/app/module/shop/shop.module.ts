import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ShopListComponent } from './component/shop-list/shop-list.component';
import { ProductService } from './service/product.service';
import { CatogryService } from '../home/service/catogry.service';
import { HomeModule } from '../home/home.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShopComponent,
    ShopListComponent
  ],
  imports: [
  CommonModule,
    ShopRoutingModule,
    FormsModule
  ],
})
export class ShopModule { }
