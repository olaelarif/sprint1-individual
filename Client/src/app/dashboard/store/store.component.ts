import { Component, OnInit, } from '@angular/core';
import {HttpModule, Http} from '@angular/http';
import {HttpParams, HttpClientModule} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';





@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  
  name: string;
  id: number;
  price: number;
  createdAt: Date;
  uptadetAt: Date;
  sellerName: String;

  constructor(private http:HttpClient) { }


  ngOnInit() {
    
  }

  displayedColumns = ['id', 'name', 'createdAt', 'uptadetAt','sellerName'];
  

onCreate(){
 
this.http.post('https://localhost:3000/api/product/createProduct',   {
 
    name: 'foo',
    price: 123,
   
  })
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
}
onUpdate(event){
this.http.patch('https://api/product/updateProduct/:productId',event.productId);
}
onDelete(){

}

}