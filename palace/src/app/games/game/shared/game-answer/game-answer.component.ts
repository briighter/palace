import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameServiceService } from '../services/game-service.service';

@Component({
  selector: 'app-game-answer',
  templateUrl: './game-answer.component.html',
  styleUrls: ['./game-answer.component.scss'],
})
export class GameAnswerComponent implements OnInit {
  @Output() submitAnswerEvent = new EventEmitter<string>();
  userAnswer = new FormControl('');

  constructor(private gameService: GameServiceService) { }

  ngOnInit() {}

  submit() {
    this.submitAnswerEvent.emit(this.userAnswer.value);
    this.submitGameData(this.userAnswer.value);
  }

  submitGameData(data) {
    console.log('Game data has been submitted');
    this.gameService.postGameHistory(data);
  }
}
