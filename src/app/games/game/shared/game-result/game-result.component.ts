import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.scss'],
})
export class GameResultComponent implements OnInit {
  @Output() beginPlayEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}

  beginPlay() {
    this.beginPlayEvent.emit(true);
  }
}
