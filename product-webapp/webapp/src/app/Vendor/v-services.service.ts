import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { vector } from 'echarts';
import { Observable } from 'rxjs';
import { Vendor } from '../module/vender';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VServicesService {
  baseUrl ="https://dispatchdynamo.stackroute.io";

  constructor(private httpClient: HttpClient) { }

  getvendordetails():Observable<Vendor> {
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('Token')
    });
    let requestOptions = { headers: httpHeaders }
    return this.httpClient.get<Vendor>(this.baseUrl+"/api/vendor/getvendor", requestOptions)
  }

  updatevendordetails(updateVendorDetails:any){
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('Token')
    });
    let requestOptions = { headers: httpHeaders }
    return this.httpClient.post(this.baseUrl+"/api/vendor/patchVendorDetails", updateVendorDetails,requestOptions)
  }

  addCity(city: string){
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('Token')
    });
    let requestOptions = { headers: httpHeaders }
    return this.httpClient.put(this.baseUrl+"/api/vendor/city", city,requestOptions)
  }

  deleteCity(city: string) {
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('Token')
    });
    let requestOptions = { headers: httpHeaders }
    return this.httpClient.delete(this.baseUrl+"/api/vendor/deletecity/"+city , requestOptions)
  }

  getAllCities(){
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('Token')
    });
    let requestOptions = { headers: httpHeaders }
    return this.httpClient.get(this.baseUrl+"/api/vendor/getallcities", requestOptions)
  }

  updatePrice(updateprice:number){
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('Token')
    });
    let requestOptions = { headers: httpHeaders }
    return this.httpClient.post(this.baseUrl+"/api/vendor/addprice", updateprice,requestOptions)
  }

  getInternationalPrice(){
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('Token')
    });
    let requestOptions = { headers: httpHeaders }
    return this.httpClient.get(this.baseUrl+"/api/vendor/getInternationalPrice", requestOptions)
  }
  getDomesticPrice(){
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('Token')
    });
    let requestOptions = { headers: httpHeaders }
    return this.httpClient.get(this.baseUrl+"/api/vendor/getDomesticPrice", requestOptions)
  }

  addImage(data: any) {

    let email=localStorage.getItem('email')
    return this.httpClient.post(this.baseUrl+"/profileImage/"+email,data);
  }

  getImage() {
    let email = localStorage.getItem('email')
    return this.httpClient.get(this.baseUrl+"/getprofileImage/"+email);
  }

  deleteImage() {
    let email = localStorage.getItem('email')
    return this.httpClient.delete(this.baseUrl+"/deleteprofileImage/"+email);
  }

}
