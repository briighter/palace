import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameIntroComponent } from './game-intro/game-intro.component';



@NgModule({
  declarations: [GameIntroComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GameIntroComponent
  ]
})
export class SharedModule { }
