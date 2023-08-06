import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShopModule } from '../shop/shop.module';
import { CatogryService } from './service/catogry.service';
import { UsersModule } from '../users/users.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
})
export class HomeModule { }
