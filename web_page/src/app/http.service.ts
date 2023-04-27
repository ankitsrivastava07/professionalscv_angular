import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './api-response.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  loginApi = 'http://localhost:8081/unauthenticated/api/login'

  login(formData:any) {
    return this.httpClient.post<ApiResponse>(this.loginApi, formData);
  }

}
