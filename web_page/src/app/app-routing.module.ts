import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SliderComponent } from './slider/slider.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ArticleComponent } from './article/article.component';
import { EmailSentConfirmationComponent } from './email-sent-confirmation/email-sent-confirmation.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {path: '', component: SliderComponent},
  {path: 'change-password/:id:?token', component: ChangePasswordComponent},
  {path: 'password-reset-confirmation-email', component: EmailSentConfirmationComponent},
  {path: 'article/:articleSlugName', component: ArticleComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: 'signin', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
  ngOnInit() {
    window.location.reload();
  }

 }
