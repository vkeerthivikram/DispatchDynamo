import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }
  baseUrl ="https://dispatchdynamo.stackroute.io";
  post(customer:any){
    return this.http.post(this.baseUrl+'/api/v1/auth/adduser',customer);
  }

}
