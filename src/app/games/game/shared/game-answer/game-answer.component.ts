import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-game-answer',
  templateUrl: './game-answer.component.html',
  styleUrls: ['./game-answer.component.scss'],
})
export class GameAnswerComponent implements OnInit {
  userAnswerControl = new FormControl('');
  constructor() { }

  ngOnInit() {}

  submit() {

  }

}
