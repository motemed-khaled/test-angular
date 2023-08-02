import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"" , component:MainLayoutComponent , children:[
      {path:"" ,redirectTo:"home", pathMatch:"full"},
      { path: 'quotes', loadChildren: () => import('../quotes/quotes.module').then(m => m.QuotesModule) },
      {path:"home" , component:HomeComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedModuleRoutingModule { }
