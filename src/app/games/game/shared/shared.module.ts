import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { GameIntroComponent } from './game-intro/game-intro.component';
import { GameAnswerComponent } from './game-answer/game-answer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GameResultComponent } from './game-result/game-result.component';
import { GameSettingsComponent } from './game-settings/game-settings.component';



@NgModule({
  declarations: [GameIntroComponent, GameAnswerComponent, GameResultComponent, GameSettingsComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [
    GameIntroComponent,
    GameAnswerComponent,
    GameResultComponent,
    GameSettingsComponent
  ]
})
export class SharedModule { }
