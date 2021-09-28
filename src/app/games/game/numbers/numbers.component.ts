import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})
export class NumbersComponent implements OnInit {
  playing = false; //Refactor to game state enum
  min = 0;
  max = 9;
  numbers = '';
  subjectIsDisplayed = false;
  inputIsDisplayed = false;
  resultIsDisplayed = false;
  answers = []; // Refactor to database
  gameResult: boolean;

  constructor() { }

  ngOnInit() {
  }

  ionViewDidLeave() {
    this.subjectIsDisplayed = false;
    this.inputIsDisplayed = false;
    this.resultIsDisplayed = false;
  }

  beginPlay(playState: boolean) {
    this.numbers = '';
    this.generateNumbers(2);
    this.subjectIsDisplayed = true;
    this.resultIsDisplayed = false;
    this.playing = playState;
    this.hideNumbers();
  }

  generateNumbers(size: number) {
    let num;
    for(let i = 1; i <= size; i++) {
      num = Math.floor(Math.random() * (this.max - this.min) + this.min);
      this.numbers = this.numbers.concat(num);
    }
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

  checkUserAnswer(ans: string) {
    if (this.numbers === ans) {
      return true;
    }
    return false;
  }

  submitUserAnswer(ans: string) {
    this.answers.push(ans);
    this.gameResult = this.checkUserAnswer(ans);
    this.inputIsDisplayed = false;
    this.resultIsDisplayed = true;
  }
}
