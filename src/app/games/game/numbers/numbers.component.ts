import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})
export class NumbersComponent implements OnInit {
  playing = false; //Refactor to game state enum
  numbers = '1234';
  subjectIsDisplayed = false;
  inputIsDisplayed = false;
  resultIsDisplayed = false;
  answers = []; // Refactor to database

  constructor() { }

  ngOnInit() {
  }

  ionViewDidLeave() {
    this.subjectIsDisplayed = false;
    this.resultIsDisplayed = false;
    this.inputIsDisplayed = false;
  }

  beginPlay(playState: boolean) {
    this.subjectIsDisplayed = true;
    this.resultIsDisplayed = false;
    this.playing = playState;
    this.hideNumbers();
  }

  hideNumbers() {
    setTimeout(function() {
      this.subjectIsDisplayed = false;
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
    this.resultIsDisplayed = true;
  }
}
