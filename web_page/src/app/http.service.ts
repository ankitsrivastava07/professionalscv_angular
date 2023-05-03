import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './api-response.model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient, private activatedRoute:ActivatedRoute) { }

  loginApi = 'https://44.213.204.68:8443/unauthenticated/api/login'
  categoriesApi ='https://44.213.204.68:8443/unauthenticated/api/categories'
  articleApi = 'https://44.213.204.68:8443/unauthenticated/api/article-slug-name/'
  passwordResetEmail = 'https://44.213.204.68:8443/unauthenticated/api/'

  emailCheckApi='https://44.213.204.68:8443/unauthenticated/api/email/'

  validateTokenApi='https://44.213.204.68:8443/unauthenticated/api/'

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

  findAccount(email:string) {
    return this.httpClient.get<ApiResponse>(this.emailCheckApi + email + '/find')
  }

  validatePasswordResetToken(token: string) {
    return this.httpClient.get<ApiResponse>(this.validateTokenApi + token + '/validate')
  }

  passwordReset(formData:any, changePasswordApi:string) {
    return this.httpClient.post<ApiResponse>(changePasswordApi, formData)
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
