import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import {environment} from "../../../environments/environment";
// import { Chart } from "chart.js";

@Component({
    selector: "app-user-dashboard",
    templateUrl: "./user-dashboard.component.html",
    styleUrls: ["./user-dashboard.component.css"],
})
export class UserDashboardComponent {
    baseUrl ="https://dispatchdynamo.stackroute.io";
    beRecommendationAppBaseUrl=this.baseUrl+"/api/neo4j";
    constructor(private http:HttpClient)
    {
this.getusercity()
    }
usercity:any;
 imageUrl = 'https://bootdey.com/img/Content/avatar/avatar7.png';
getusercity()
{
    var city:any

    this.http.get(this.baseUrl+"/user-profile/getUserCityById/"+localStorage.getItem("email"),{responseType: 'text'}).subscribe(data=>
    {
        city=data
        this.getallvendors(city)
    })
     
 
}
searchcities:any
getallvendors(p:any)
{

this.http.get(this.baseUrl+"/api/vendor/filteredVendorByCity/"+p).subscribe(data=>this.searchcities=data);
}

}
