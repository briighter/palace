import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { GameIntroComponent } from './game-intro/game-intro.component';
import { SettingsComponent } from './settings/settings.component';
import { GameAnswerComponent } from './game-answer/game-answer.component';



@NgModule({
  declarations: [GameIntroComponent, GameAnswerComponent, SettingsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    GameIntroComponent,
    GameAnswerComponent,
    SettingsComponent
  ]
})
export class SharedModule { }
