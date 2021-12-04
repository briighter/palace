import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameHistory } from 'src/app/shared/models/game-history';
import { GameServiceService } from '../shared/services/game-service.service';
import { GameSettingsService } from '../shared/services/game-settings.service';

interface Settings {
  length: number;
  timeMinutes: number;
  timeSeconds: number;
  fontSize: number;
}

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})
export class NumbersComponent implements OnInit, OnDestroy {
  game = 'numbers'; // Refactor to game enum
  playing = false; //Refactor to game state enum
  min = 0;
  max = 9;
  numbers = '';
  subjectIsDisplayed = false;
  inputIsDisplayed = false;
  resultIsDisplayed = false;
  settingsIsDisplayed = false;

  gameResult: string;

  // Initialize settings
  settings: Settings = {
    length: 6,
    timeMinutes: 0,
    timeSeconds: .5,
    fontSize: 0
  };
  timeMilli = this.settings.timeSeconds * 1000;

  settingsSubscription: Subscription;

  gameHistory: GameHistory;
  timeSeconds: number;

  constructor(private settingService: GameSettingsService, private gameService: GameServiceService) {
    this.settingsSubscription = settingService.settings$.subscribe(
      settings => {
        this.settings = settings;
      }
    );
  }

  ngOnInit() {
    this.convertTimeToMili(this.settings.timeMinutes, this.settings.timeSeconds);
    this.convertTimeToSeconds(this.settings.timeMinutes, this.settings.timeSeconds);
  }

  ionViewDidLeave() {
    this.playing = false;
    this.subjectIsDisplayed = false;
    this.inputIsDisplayed = false;
    this.resultIsDisplayed = false;
    this.settingsIsDisplayed = false;
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.settingsSubscription.unsubscribe();
  }

  beginPlay(playState: boolean) {
    this.numbers = '';
    this.generateNumbers(this.settings.length);
    this.subjectIsDisplayed = true;
    this.resultIsDisplayed = false;
    this.playing = playState;
    this.hideNumbers();
  }

  generateNumbers(size: number) {
    let num;
    for (let i = 1; i <= size; i++) {
      num = Math.floor(Math.random() * (this.max - this.min) + this.min);
      this.numbers = this.numbers.concat(num);
    }
  }

  hideNumbers() {
    setTimeout(function() {
      this.subjectIsDisplayed = false;
    }.bind(this), this.timeMilli);

    setTimeout(() => {
      this.showGetAnswer();
    }, this.timeMilli);
  }

  showGetAnswer() {
    this.inputIsDisplayed = true;
  }

  checkUserAnswer(ans: string) {
    if (this.numbers === ans) {
      return 'w';
    }
    return 'l';
  }

  submitUserAnswer(ans: string) {
    this.gameResult = this.checkUserAnswer(ans);
    this.submitGameData();
    this.inputIsDisplayed = false;
    this.resultIsDisplayed = true;
  }

  toggleSettings(isDisplayed: boolean) {
    this.settingsIsDisplayed = isDisplayed;
  }

  updateSettings() {
    this.convertTimeToMili(this.settings.timeMinutes, this.settings.timeSeconds);
    this.convertTimeToSeconds(this.settings.timeMinutes, this.settings.timeSeconds);
    this.toggleSettings(true);
  }

  convertTimeToMili(minutes: number, seconds: number) {
    const minToMilli = (minutes * 60) * 1000;;
    const secToMilli = seconds * 1000;;

    const timeMilliseconds = minToMilli + secToMilli;

    this.timeMilli = timeMilliseconds;
  }

  convertTimeToSeconds(minutes: number, seconds: number) {
    this.timeSeconds = (minutes * 60) + seconds;
  }

  submitGameData() {
    this.gameHistory = {
      gameId: 103,
      game: this.game,
      gameResult: this.gameResult.toString(),
      numberOfItems: this.settings.length,
      numberOfSeconds: this.timeSeconds
    };
    console.log('Built game data...');

    this.gameService.postGameHistory(this.gameHistory);
  }
}
