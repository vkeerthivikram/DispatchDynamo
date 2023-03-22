import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VenderService {
  baseUrl ="https://dispatchdynamo.stackroute.io/api/vendor"

  constructor(private httpClient: HttpClient) { }
  getallcities()
  {
   return this.httpClient.get(this.baseUrl+"/getallcities");
  }

  deletecit(p:any)
  {

    return this.httpClient.delete(this.baseUrl+"/deletecity/"+p)
  }

  addCity(p:any)
  {
    alert(p)
    return this.httpClient.put(this.baseUrl+"/city",p)
  }

  getprice()
  {
    return this.httpClient.get(this.baseUrl+"/getPrice")
  }

  updateprice(p:any)
  {
    return this.httpClient.post(this.baseUrl+"/addprice",p)
  }


  beRecommendationAppBaseUrl ="https://dispatchdynamo.stackroute.io"
  getallshipments(trackid:any){
    return this.httpClient.get(this.beRecommendationAppBaseUrl+"/getshipment/"+trackid)
  }

}
