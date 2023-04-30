import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  constructor(private http:HttpService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    let token = ''+this.route.snapshot.paramMap.get('token')
    this.http.validateToken(token).subscribe(data => {

      if(data.status === false) {
        alert(data.msg)
        this.router.navigate(['/signin'])
        return;
      }
    }
    )
  }
}
