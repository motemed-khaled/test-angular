import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './core/component/header/header.component';
import { authGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path:"" , redirectTo:"todo" , pathMatch:"full"},
  {
    path: 'todo',
    loadChildren: () => import('./modules/todo/todo.module').then(m => m.TodoModule),
    canActivate:[authGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
