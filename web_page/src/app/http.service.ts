import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './api-response.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  loginApi = 'http://ec2-3-7-13-234.ap-south-1.compute.amazonaws.com:8080/unauthenticated/api/login'
  categoriesApi ='http://ec2-3-7-13-234.ap-south-1.compute.amazonaws.com:8080/unauthenticated/api/categories'
  articleApi = 'http://ec2-3-7-13-234.ap-south-1.compute.amazonaws.com:8080/unauthenticated/api/article-slug-name/'

  passwordResetEmail = 'http://ec2-3-7-13-234.ap-south-1.compute.amazonaws.com:8080/unauthenticated/api/'

  login(formData:any) {
    return this.httpClient.post<ApiResponse>(this.loginApi, formData);
  }

  getCategories(){
    return this.httpClient.get<ApiResponse>(this.categoriesApi);
  }

  getArticle(articleName:string) {
    return this.httpClient.get<ApiResponse>(this.articleApi+articleName + "/get-article")
  }

  sendEmailForPasswordReset(email:string, formData:any) {
    return this.httpClient.post<ApiResponse>(this.passwordResetEmail + email + '/password-reset-email', formData)
  }

}
