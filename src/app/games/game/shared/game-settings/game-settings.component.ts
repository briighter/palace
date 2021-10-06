import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

interface Settings {
  length: number;
  timeMinutes: number;
  timeSeconds: number;
  fontSize: number;
}

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.scss'],
})
export class GameSettingsComponent implements OnInit {
  @Output() goBackEvent = new EventEmitter<boolean>();
  @Output() submitSettingsEvent = new EventEmitter<Settings>();
  @Input() game;

  settings: Settings = {
    length: 5,
    timeMinutes: 0,
    timeSeconds: 3,
    fontSize: 0
  };

  settingsForm = new FormGroup({
    length: new FormControl(this.settings.length),
    timeMinutes: new FormControl(this.settings.timeMinutes),
    timeSeconds: new FormControl(this.settings.timeSeconds),
    fontSize: new FormControl()
  });

  constructor() { }

  ngOnInit() {}

  onSubmit() {
    console.log('Inside Settings');
    console.log(this.settingsForm.value);
    this.submitSettingsEvent.emit(this.settingsForm.value);
    this.goBackEvent.emit(false);
  }

  goBack() {
    this.goBackEvent.emit(false);
  }

}
