import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { ApiResponse } from '../api-response.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private httpService: HttpService) {}

  apiResponse: ApiResponse = new ApiResponse()
  isValidLogin = false
  
  login(formData: any) {
    this.apiResponse = new ApiResponse()
    this.httpService.login(formData.value).subscribe(data => {
      this.apiResponse = data;
      this.isValidLogin = data.status
    })
  }
}
