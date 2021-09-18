import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamePage } from './game.page';
import { LettersComponent } from './letters/letters.component';
import { NumbersComponent } from './numbers/numbers.component';

const routes: Routes = [
  {
    path: '',
    component: GamePage
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'letters',
    component: LettersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamePageRoutingModule {}
