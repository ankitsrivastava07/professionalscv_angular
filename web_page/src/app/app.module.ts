import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { BrowserModule } from '@angular/platform-browser';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import {HttpClientModule} from '@angular/common/http';
import { ReqInterceptorComponent } from './req-interceptor/req-interceptor.component';
import { FooterComponent } from './footer/footer.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ArticleComponent } from './article/article.component';
import { EmailSentConfirmationComponent } from './email-sent-confirmation/email-sent-confirmation.component';

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
    EmailSentConfirmationComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,             
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
