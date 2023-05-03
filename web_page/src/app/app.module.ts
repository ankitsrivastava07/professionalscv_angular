import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { SliderComponent } from './slider/slider.component';
import { BrowserModule } from '@angular/platform-browser';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ReqInterceptorComponent } from './req-interceptor/req-interceptor.component';
import { FooterComponent } from './footer/footer.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ArticleComponent } from './article/article.component';
import { EmailSentConfirmationComponent } from './email-sent-confirmation/email-sent-confirmation.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    SliderComponent,
    ForgetPasswordComponent,
    ReqInterceptorComponent,
    FooterComponent,
    ComingSoonComponent,
    ArticleComponent,
    EmailSentConfirmationComponent,
    ChangePasswordComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ReqInterceptorComponent, multi: true }],
  bootstrap: [IndexComponent]
})
export class AppModule { }
