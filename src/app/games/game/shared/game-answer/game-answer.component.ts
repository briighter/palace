import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-game-answer',
  templateUrl: './game-answer.component.html',
  styleUrls: ['./game-answer.component.scss'],
})
export class GameAnswerComponent implements OnInit {
  userAnswer = new FormControl('');
  
  constructor() { }

  ngOnInit() {}

  submit() {
    alert(this.userAnswer.value);
  }

}
