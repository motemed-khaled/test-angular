import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductItemComponent,
    ShopComponent,
    CartComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ]
})
export class ProductModule { }
