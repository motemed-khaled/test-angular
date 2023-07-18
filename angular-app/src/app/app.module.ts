import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/shared component/home/home.component';
import { FooterComponent } from './shared/shared component/footer/footer.component';
import { NotFoundComponent } from './shared/shared component/not-found/not-found.component';
import { MainLayOutComponent } from './shared/layout/main-lay-out/main-lay-out.component';
import { HeaderComponent } from './shared/shared component/header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    MainLayOutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
