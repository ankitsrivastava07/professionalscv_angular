import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  passwordResetApi='https://ec2-3-7-13-234.ap-south-1.compute.amazonaws.com:8443/unauthenticated/api/'

  validationError:any=null

  constructor(private http:HttpService, private activatedRoute:ActivatedRoute, private router:Router) {}

   ngOnInit() {
   console.log(this.activatedRoute.snapshot.queryParams['token']);
    console.log('ID '+this.activatedRoute.snapshot.params['id']);
    let passwordResetToken = '' + this.activatedRoute.snapshot.params['id']
     this.http.validatePasswordResetToken(this.activatedRoute.snapshot.queryParams['token']).subscribe(data => {
    if(data.status === false) {
        alert(data.msg)
        this.router.navigate(['/signin'])
     }
     })
   }

  passwordResetFunction(formDataPasswordReset:any){
    this.validationError=null;

    let token = this.activatedRoute.snapshot.queryParams['token']
    let userId = this.activatedRoute.snapshot.params['id']
    console.log(this.activatedRoute.snapshot.params['id'])

   console.log(formDataPasswordReset.value)

    const passwordResetFormData = {
      password: formDataPasswordReset.value.password, 
      confirmPassword: formDataPasswordReset.value.confirmPassword,
      browserName: this.http.getBrowserName()
    }

   this.http.passwordReset(passwordResetFormData, this.passwordResetApi + userId + '/change-password?token=' + token).subscribe(data => {
    
    console.log(data)

    if(data.status === true) {
        alert(data.msg)
         this.router.navigate(['/signin'])
     }

       if(data.status === false && data.validationFailed === true) {
         this.validationError = data.error
         return;
       }

       if(data.status === false) {
        this.validationError = data.error
        //this.router.navigate(['/signin'])
        //location.reload();
      }

     })
  }
}
