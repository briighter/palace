import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { LoginComponent } from '../login/login.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }
