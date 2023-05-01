import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  constructor(private http:HttpService, private route:ActivatedRoute, private router:Router) {}

   ngOnInit() {
    let passwordResetToken = '' + this.route.snapshot.paramMap.get('token')
     this.http.validatePasswordResetToken(passwordResetToken).subscribe(data => {
    console.log('Password Token ' + passwordResetToken)
      if(data.status === true) {
          
      }

     })
   }

  passwordResetFunction(formDataPasswordReset:any){
     alert('Password Reset Data ' + formDataPasswordReset.value)
  }
}
