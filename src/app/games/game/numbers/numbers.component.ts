import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})
export class NumbersComponent implements OnInit {
  playing = false; //Refactor to game state enum
  numbers = '1234';
  isDisplayed = false;
  inputIsDisplayed = false;
  answers = []; // Refactor to database

  constructor() { }

  ngOnInit() {
  }

  ionViewDidLeave() {
    this.isDisplayed = false;
  }

  beginPlay(playState: boolean) {
    this.isDisplayed = true;
    this.playing = playState;
    this.hideNumbers();
  }

  hideNumbers() {
    setTimeout(function() {
      this.isDisplayed = false;
    }.bind(this), 1000);

    setTimeout(() => {
      this.showGetAnswer();
    }, 1100);
  }

  showGetAnswer() {
    this.inputIsDisplayed = true;
  }

  submitUserAnswer(ans: string) {
    this.answers.push(ans);
    this.inputIsDisplayed = false;
  }
}
