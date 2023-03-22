import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  baseUrl ="https://dispatchdynamo.stackroute.io";

  get(user: any) {
    return this.http.post(this.baseUrl+'/api/v1/auth/genratetoken', user);
  }
}
