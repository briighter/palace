import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { GameIntroComponent } from './game-intro/game-intro.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [GameIntroComponent, SettingsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    GameIntroComponent,
    SettingsComponent
  ]
})
export class SharedModule { }
