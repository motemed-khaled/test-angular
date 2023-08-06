import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../shop/service/product.service';
import { Catogry } from 'src/app/interface/catogry';
import { CatogryService } from './service/catogry.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  allCatogry!:BehaviorSubject<Catogry[]>
  constructor(private readonly catogryService: CatogryService) {
    this.allCatogry = this.catogryService.getAllCatogry();
  }
  deleteOne() {
    this.catogryService.deleteCatogry(3)
  }
}
