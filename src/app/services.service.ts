import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()

export class WayFairerServices {
    url = " https://wayfairer-rest-api.herokuapp.com/";
     constructor(private http: Http) {
 };
    consumeWebService(endpoint:string) {
       console.log("End point:"+endpoint);
       console.log("Complete URL"+ this.url+endpoint);
       //this.url = this.url+endpoint;
        this.http.get(this.url).subscribe(value =>{
            console.log(value)
           
        });
         return 'a!';
    }
}