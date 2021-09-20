import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})
export class NumbersComponent implements OnInit {
  playing = false; //Refactor to game state enum

  constructor() { }

  ngOnInit() {
  }

  beginPlay(playState: boolean) {
    this.playing = playState;
  }
}
