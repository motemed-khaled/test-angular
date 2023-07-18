import { Component } from '@angular/core';
import { Cart } from 'src/app/shared/interface/cart';
import { StaticCartService } from 'src/app/shared/service/static-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartList: Cart[];
  constructor(private cartService: StaticCartService) {
    this.cartList = this.cartService.getAllCartItem();
  }
}
