import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {S1Service} from './s1.service';
import {HomepageComponent} from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdatepageComponent } from './updatepage/updatepage.component';
import { AddpageComponent } from './addpage/addpage.component';
import { DeletepageComponent } from './deletepage/deletepage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UpdatepageComponent,
    AddpageComponent,
    DeletepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
