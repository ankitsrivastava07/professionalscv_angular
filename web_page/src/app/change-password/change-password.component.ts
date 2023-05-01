import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  constructor(private http:HttpService, private activatedRoute:ActivatedRoute, private router:Router) {}

   ngOnInit() {

   console.log(this.activatedRoute.snapshot.queryParams['token']);

    console.log(this.activatedRoute.snapshot.params['id']);
    let passwordResetToken = '' + this.activatedRoute.snapshot.params['id']
     this.http.validatePasswordResetToken(passwordResetToken).subscribe(data => {
    if(data.status === false) {
        alert(data.msg)
        this.router.navigate(['/signin'])
     }

     })
   }

  passwordResetFunction(formDataPasswordReset:any){
     alert('Password Reset Data ' + formDataPasswordReset.value)
  }
}
