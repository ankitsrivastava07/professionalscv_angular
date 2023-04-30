import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  lat:number = 0;
  lng:number = 0;

  constructor(private http: HttpService, private route: Router) {}

  emailSentForPasswordReset(formData:any) {

    this.getLocation();

    formData = {
      "browserName" : this.getBrowserName(),
      "email": formData.email,
      "location": "",
      "redirectUri" : window.location.host  + '/password-reset-confirmation-email'
    }

    console.log(formData)
    this.http.sendEmailForPasswordReset(formData.email, formData).subscribe(data => {
     if(data.status === true) {
         this.route.navigate(['/password-reset-confirmation-email'])
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

  public getBrowserName() {
    const agent = window.navigator.userAgent.toLowerCase()
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'Edge';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'Opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'Chrome';
      case agent.indexOf('trident') > -1:
        return 'IE';
      case agent.indexOf('firefox') > -1:
        return 'Firefox';
      case agent.indexOf('safari') > -1:
        return 'Safari';
      default:
        return 'Other';
    }
}

}
