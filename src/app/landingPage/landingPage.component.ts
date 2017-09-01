import { Component } from '@angular/core';
import { WayFairerServices } from '../services.service';
import {UserRegistrationDetails} from '../landingPage/UserRegistrationDetails';
declare var $:any;
declare var bootbox:any;
@Component({
  selector: 'landing',
  templateUrl: 'landing.component.html',
   providers: [WayFairerServices]
  //styleUrls: ['./app.component.css']
})
export class LandingPageComponent {
  showForm=false;;
  userRegistrationDetails= new UserRegistrationDetails();
    constructor(private _wayfairerService: WayFairerServices) {

    }

    ngOnInit() {
       
    }
    public confirmationModalClose(){
      $('#registrationConfirmationModal').modal('toggle');
      window.location.reload();
    }

    public register($event:any){
      console.log(this.userRegistrationDetails);

      this._wayfairerService.consumePostWebService("registration",this.userRegistrationDetails).subscribe(
         data => {
          $('#userDetailsModal').modal('toggle');
           $('#registrationConfirmationModal').modal('toggle');
         return true;
       },
       error => {
         console.error("Error in serving request");
       }
      );
    }
    public setExperienceLocation($event:any){
      var selected = $event.target;
      this.userRegistrationDetails.experienceLocation = selected.innerText;
      $('.experienceLocationOptions').removeClass('active');
      $('#' +selected.id).addClass('active');
    }
     public setExperienceType($event:any){
      var selected = $event.target;
      this.userRegistrationDetails.experienceType = selected.innerText;
      $('.experienceTypeOptions').removeClass('active');
      $('#' +selected.id).addClass('active');
    }
   
}
