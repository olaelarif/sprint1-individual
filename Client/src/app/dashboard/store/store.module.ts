import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import {HttpModule, Http} from '@angular/http';
import {HttpParams, HttpClientModule} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";
import{RouterModule}from "@angular/router";

@NgModule({
  imports: [
    CommonModule, 
  ],
  declarations: [StoreComponent] ,
  exports: [ CommonModule,  HttpModule, RouterModule, ]
})

 

export class StoreModule { }
