import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private httpClinte: HttpClient) { }
  baseUrl ="https://dispatchdynamo.stackroute.io";
  beRecommendationAppBaseUrl=this.baseUrl+"/api/neo4j";
  getalluserdetails(){
    return this.httpClinte.get(this.beRecommendationAppBaseUrl+"/getalluserdetails");
  }
  getuserbycity(cityobj : any){
    return this.httpClinte.get(this.beRecommendationAppBaseUrl+"/Users-By-City/"+cityobj);
  }
  // getSearchedProperties(search) {
  //   return this.httpClinte.get(this. beRecommendationAppBaseUrl+ "/Users-By-City" + search);
  // }

  signup(signup: any) {
    return this.httpClinte.post(this.baseUrl+"/adduser",signup);
  }

  loginCheck(logindata: any) {
    return this.httpClinte.post(this.baseUrl+"/genratetoken", logindata);
  }
  getUserByEmailId(emailId:any){
    return this.httpClinte.get(this.baseUrl+"/user-profile/getUserById/"+emailId);
  }
  updateUser(EmailValidator:any,userDetails:any){
    return this.httpClinte.put(this.baseUrl+"/user-profile/updateUserById/"+EmailValidator,userDetails)
  }
}
