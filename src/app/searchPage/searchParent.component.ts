import { Component } from '@angular/core';
import { WayFairerServices } from '../services.service';
import {SearchChildComponent} from './searchChildComponent.component'

@Component({
  selector: 'parent',
   providers: [WayFairerServices],
  template: `<div class="parent">
                <h1>Parent</h1>
                <input type="text" #parentInput (keyup)="changeChildFunct()"><br>
                <button>CLick me</button>
               
                <div class="child">
                  <search-result [searchResults]="res"></search-result>
                </div>
              </div>`,
  
})
export class SearchParentComponent {
  res= "hii";
  /*public changeChildFunct(){
let  res1 =  this._wayfairerService.consumeGetWebService("http://services.groupkt.com/country/get/all").subscribe(data=>{
    console.log("----------"+data);
    this.res = data.RestResponse.result;
    console.log(this.res);
    })
  }*/
 


  
  //res = this.res1['result'];
  debugger;
  constructor(private _wayfairerService: WayFairerServices) {

    }
}

/*import { HEROES } from './hero';
 
@Component({
  selector: 'hero-parent',
   providers: [WayFairerServices],
  template: `
    <h2>{{master}} controls {{heroes.length}} heroes</h2>
    <hero-child *ngFor="let hero of heroes"
      [hero]="hero"
      [master]="master">
    </hero-child>
  `
})
export class HeroParentComponent {
  heroes = HEROES;
   master = 'Master';

 
}*/