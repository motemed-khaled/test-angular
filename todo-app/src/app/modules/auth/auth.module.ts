import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AngularMatModule } from 'src/app/shared/ui/angular-material/angular-mat/angular-mat.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMatModule
  ],
  providers:[]
})
export class AuthModule {

}
