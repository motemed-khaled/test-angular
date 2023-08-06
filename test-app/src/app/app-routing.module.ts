import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NotfoundComponent } from './component/notfound/notfound.component';

const routes: Routes = [
  {
    path: "", component: MainLayoutComponent, children: [
  { path: 'home', loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule) },
  { path: 'users', loadChildren: () => import('./module/users/users.module').then(m => m.UsersModule) },
  { path: 'shop', loadChildren: () => import('./module/shop/shop.module').then(m => m.ShopModule) },
  ]},
  {
    path:"**" , component:NotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
