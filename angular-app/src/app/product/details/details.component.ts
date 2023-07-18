import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Products } from 'src/app/shared/interface/products';
import { StaticPrpductService } from 'src/app/shared/service/static-prpduct.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  curentprodId: number = 0;
  product: Products[] | null = null;
  productIds: number[] = [];

  constructor(private activeRoutes: ActivatedRoute,
    private prosuctService: StaticPrpductService,
    private location: Location,
    private router:Router) {
  }
  ngOnInit(): void {
    this.productIds = this.prosuctService.getProdIds();
    // this.curentprodId = Number(this.activeRoutes.snapshot.paramMap.get("pid"));
    // this.product = this.prosuctService.getSpecificProduct(this.curentprodId);
    this.activeRoutes.paramMap.subscribe((paramMap) => {
      this.curentprodId = Number(paramMap.get("pid"));
      this.product = this.prosuctService.getSpecificProduct(this.curentprodId);
    })

  }

  goBack() {
    this.location.back();
  }

  pre() {
    let currentIndex = this.productIds.findIndex(ele => ele == this.curentprodId);
    let preProductId
    if (currentIndex > 0) {
      preProductId = this.productIds[currentIndex - 1];
      this.router.navigate(["/product/id", preProductId]);
    }
  }

  next() {
    let currentIndex = this.productIds.findIndex(ele => ele == this.curentprodId);
    let nextProductId
    if (currentIndex < this.productIds.length) {
      nextProductId = this.productIds[currentIndex + 1];
      this.router.navigate(["/product/id", nextProductId]);
    }
  }

}
