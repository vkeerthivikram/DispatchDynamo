import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {environment} from "../../environments/environment";
interface User {
    emailId: string;
    name: String;
    mobileNo: String;
    address: {
        addressLine1: String;
        city: String;
        state: String;
        country: String;
        zipcode: String;
    };
    // mobile: String;
}
@Injectable({
    providedIn: "root",
})
export class UserServiceService {
    baseUrl = "https://dispatchdynamo.stackroute.io";
    private apiUrl1 = this.baseUrl + "/user-profile/getUserById/";
    private apiUrl2 = this.baseUrl + "/user-profile/updateUserById/";

    private apiUrl3 = this.baseUrl + "/user-profile/deleteUserById/";

    constructor(private http: HttpClient) {
    }

    // User: any = {};
    getProfile(p): Observable<any> {
        return this.http.get<any>(`${this.apiUrl1}` + p);
    }

    updateUser(emailId: string, user: any): Observable<any> {
        console.log(user);
        return this.http.put<any>(`${this.apiUrl2}` + emailId, user);
    }

    deleteProfile(p): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl3}` + p);
    }
}
