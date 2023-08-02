import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared-module/main-layout/main-layout.component';
import { HomeComponent } from './shared-module/home/home.component';
import { NotFoundComponent } from './shared-module/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./shared-module/shared-module.module').then(m => m.SharedModuleModule),
  },
  {
    path:"**" , component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
