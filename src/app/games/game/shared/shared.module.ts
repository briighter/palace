import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { GameIntroComponent } from './game-intro/game-intro.component';



@NgModule({
  declarations: [GameIntroComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    GameIntroComponent
  ]
})
export class SharedModule { }
