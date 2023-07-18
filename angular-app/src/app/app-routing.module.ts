import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/shared component/not-found/not-found.component';
import { HomeComponent } from './shared/shared component/home/home.component';
import { MainLayOutComponent } from './shared/layout/main-lay-out/main-lay-out.component';

const routes: Routes = [
  {
    path:"" , component:MainLayOutComponent , children:[
      {path:"" ,redirectTo:"home", pathMatch:"full"},
      { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
      {path:"home" , component:HomeComponent },
    ]
  },
  {path:"**" , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
