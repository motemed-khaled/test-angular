import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesRoutingModule } from './quotes-routing.module';
import { QuotesComponent } from './quotes.component';
import { AllQuetsComponent } from './all-quets/all-quets.component';
import { SingleQuetsComponent } from './single-quets/single-quets.component';


@NgModule({
  declarations: [
    QuotesComponent,
    AllQuetsComponent,
    SingleQuetsComponent
  ],
  imports: [
    CommonModule,
    QuotesRoutingModule
  ]
})
export class QuotesModule { }
