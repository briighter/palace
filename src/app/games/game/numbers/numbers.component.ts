import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})
export class NumbersComponent implements OnInit {
  playing = false; //Refactor to game state enum
  numbers = '1234';
  isDisplayed = true;

  constructor() { }

  ngOnInit() {
  }

  // ionViewDidEnter() {
  //   this.hideNumbers();
  // }

  beginPlay(playState: boolean) {
    this.isDisplayed = true;
    console.log(this.isDisplayed);

    this.playing = playState;
    this.hideNumbers();
  }

  hideNumbers() {
    setTimeout(function() {
      this.isDisplayed = false;
      console.log(this.isDisplayed);
    }.bind(this), 3000);
  }
}
