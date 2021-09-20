import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-game-intro',
  templateUrl: './game-intro.component.html',
  styleUrls: ['./game-intro.component.scss'],
})
export class GameIntroComponent implements OnInit {
  @Output() beginPlayEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}

  ionViewDidLeave() {
    this.resetGameState();
  }

  beginPlay() {
    this.beginPlayEvent.emit(true);
  }

  resetGameState() {
    this.beginPlayEvent.emit(false);
  }

}
