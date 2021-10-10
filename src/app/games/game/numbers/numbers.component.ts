import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  answers = []; // Refactor to database
  gameResult: boolean;

  settings: Settings;
  numbersLength = 5;
  timeMinutes: number;
  timeSeconds: number;
  fontSize: number;
  timeMilli = 1000;

  settingsSubscription: Subscription;

  constructor(private settingService: GameSettingsService) {
    this.settingsSubscription = this.settingService.settings$.subscribe(
      settings => {
        this.settings = settings;
        this.numbersLength = settings.length;
        this.timeMinutes = settings.timeMinutes;
        this.timeSeconds = settings.timeSeconds;
        this.fontSize = settings.fontSize;
      }
    );
  }

  ngOnInit() {
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
    console.log(this.settings);
    this.numbers = '';
    this.generateNumbers(this.numbersLength);
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

  toggleSettings(isDisplayed: boolean){
    this.settingsIsDisplayed = isDisplayed;
  }

  updateSettings() {
    this.numbersLength = this.settings.length;
    this.timeMinutes = this.settings.timeMinutes;
    this.timeSeconds = this.settings.timeSeconds;
    this.fontSize = this.settings.fontSize;
    this.convertTimeToMili(this.timeMinutes, this.timeSeconds);
    this.toggleSettings(true);
  }

  convertTimeToMili(minutes: number, seconds: number) {
    const minToMilli = (minutes * 60) * 1000;;
    const secToMilli = seconds * 1000;;

    const timeMilliseconds = minToMilli + secToMilli;

    this.timeMilli = timeMilliseconds;
  }
}
