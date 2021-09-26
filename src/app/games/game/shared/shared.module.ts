import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { GameIntroComponent } from './game-intro/game-intro.component';
import { SettingsComponent } from './settings/settings.component';
import { GameAnswerComponent } from './game-answer/game-answer.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [GameIntroComponent, GameAnswerComponent, SettingsComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [
    GameIntroComponent,
    GameAnswerComponent,
    SettingsComponent
  ]
})
export class SharedModule { }
