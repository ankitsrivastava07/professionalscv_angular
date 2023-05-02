import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { ApiResponse } from '../api-response.model';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  lat:number = 0;
  lng:number = 0;

  apiResponse:ApiResponse = new ApiResponse()

  constructor(private http: HttpService, private route: Router) {}

  findAccount(forGetPassword:any) {
    this.apiResponse = new ApiResponse();
    this.http.findAccount(forGetPassword.email).subscribe(data => {
    this.apiResponse = data
    if(this.apiResponse.status === true) {

      this.getLocation();

      const emailConfirmation = {
        "browserName" : this.http.getBrowserName(),
        "email": forGetPassword.email,
        "location": "",
        "redirectUri" : window.location.origin  + '/change-password/'
      }

      this.http.sendEmailForPasswordReset(forGetPassword.email, emailConfirmation)
      .subscribe(data => {
         this.route.navigate(['/password-reset-confirmation-email'])
      })
      }
    })
  }

  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          this.lng = position.coords.longitude;
          this.lat = position.coords.latitude;
          this.callApi(this.lng, this.lat);
          console.log(this.lat + "and " + this.lng)
        });
    } else {
       console.log("No support for geolocation")
    }
  }

  callApi(Longitude: number, Latitude: number){
    const url = `https://api-adresse.data.gouv.fr/reverse/?lon=28.6785536&lat=77.266944`
  }

}
