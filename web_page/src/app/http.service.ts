import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './api-response.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  loginApi = 'http://ec2-43-204-65-53.ap-south-1.compute.amazonaws.com:8443/unauthenticated/api/login'
  categoriesApi = 'http://ec2-43-204-65-53.ap-south-1.compute.amazonaws.com:8443/unauthenticated/api/categories'

  login(formData:any) {
    return this.httpClient.post<ApiResponse>(this.loginApi, formData);
  }

  getCategories(){
    return this.httpClient.get<ApiResponse>(this.categoriesApi);
  }

}
