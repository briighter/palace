import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageModule } from './login/login.module';
import { LoginButtonComponent } from './login-button/login-button.component';


@NgModule({
  declarations: [ LoginButtonComponent ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
