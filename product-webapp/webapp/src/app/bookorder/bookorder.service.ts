import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { citydata } from './CityData';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookorderService {

  constructor(private http:HttpClient) { }
  baseUrl ="https://dispatchdynamo.stackroute.io";

  getcitydetails(p:String)
  {
     return this.http.get<citydata>(this.baseUrl+"/getcitydetails/"+p)
  }

  getpricedetails(p:any)
  {   
 return this.http.post(this.baseUrl+"/getpricelist",p)
  }
  generateTrackId() {
    var a =
        "TR" +
        Math.floor(Math.random() * 100) +
        Math.floor(Math.random() * 100) +
        Math.floor(Math.random() * 100) +
        Math.floor(Math.random() * 100) +
        Math.floor(Math.random() * 10) +
        Math.floor(Math.random() * 10);
    return a;
}
bookdetails:any

setbookorder(bookingdetails:any)
{
  this.bookdetails=bookingdetails
}
getbookingdetails()
{
  return this.bookdetails;
}
bookorder(p:any)
{
  return this.http.post(this.baseUrl+"/addShipment",p)
}
}
