import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowapiComponent } from './showapi/showapi.component';
import { EditTableComponent } from './edit-table/edit-table.component';
import { FormsModule } from '@angular/forms';
import { ShowcustomersComponent } from './showcustomers/showcustomers.component';
import { EditcustomersComponent } from './editcustomers/editcustomers.component';
import { ShowusersComponent } from './showusers/showusers.component';
import { EditusersComponent } from './editusers/editusers.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowapiComponent,
    EditTableComponent,
    ShowcustomersComponent,
    EditcustomersComponent,
    ShowusersComponent,
    EditusersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
