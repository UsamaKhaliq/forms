import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './shared/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClient
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
