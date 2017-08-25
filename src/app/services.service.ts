import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
@Injectable()

export class WayFairerServices {
    url = " https://wayfairer-rest-api.herokuapp.com/";
    
     constructor(private http: Http) {
 
 };
    consumeGetWebService(endpoint:string) {
       console.log("End point:"+endpoint);
       console.log("Complete URL"+ this.url+endpoint);
       this.url = this.url+endpoint;
        this.http.get(this.url).subscribe(value =>{
            console.log(value)
           
        });
         return 'a!';
    }
    consumePostWebService(endpoint:string,data:any): Observable<any>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        
         console.log("End point:"+endpoint);
       console.log("Complete URL"+ this.url+endpoint);
       this.url = this.url+endpoint;
       //let body = JSON.stringify(data);
        return this.http
        .post(this.url, data, options)
        .map(this.extractData)
        .catch(this.handleError);
    }
     private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}