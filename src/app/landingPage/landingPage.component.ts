import { Component } from '@angular/core';
import { WayFairerServices } from '../services.service';

@Component({
  selector: 'landing',
  templateUrl: 'landing.component.html',
   providers: [WayFairerServices]
  //styleUrls: ['./app.component.css']
})
export class LandingPageComponent {
  test: string;

    constructor(private _wayfairerService: WayFairerServices) {

    }

    ngOnInit() {
        this.test = this._wayfairerService.consumeWebService("all");
    }
}
