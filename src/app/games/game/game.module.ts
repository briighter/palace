import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamePageRoutingModule } from './game-routing.module';

import { GamePage } from './game.page';
import { NumbersComponent } from './numbers/numbers.component';
import { LettersComponent } from './letters/letters.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePageRoutingModule,
    SharedModule
  ],
  declarations: [GamePage, NumbersComponent, LettersComponent]
})
export class GamePageModule {}
