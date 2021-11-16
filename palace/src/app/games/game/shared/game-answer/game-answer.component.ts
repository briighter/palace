import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-answer',
  templateUrl: './game-answer.component.html',
  styleUrls: ['./game-answer.component.scss'],
})
export class GameAnswerComponent implements OnInit {
  @Output() submitAnswerEvent = new EventEmitter<string>();
  userAnswer = new FormControl('');

  constructor() { }

  ngOnInit() {}

  submit() {
    this.submitAnswerEvent.emit(this.userAnswer.value);
  }
}
