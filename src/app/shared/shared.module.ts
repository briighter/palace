import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './login-button/login-button.component';
import { SignupButtonComponent } from './signup-button/signup-button.component';
import { AuthenticationButtonComponent } from './authentication-button/authentication-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { AuthNavComponent } from './auth-nav/auth-nav.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [LoginButtonComponent, LogoutButtonComponent, SignupButtonComponent, AuthenticationButtonComponent, AuthNavComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    AuthNavComponent
  ]
})
export class SharedModule { }
