import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GameSettingsService } from '../services/game-settings.service';

interface Settings {
  length?: number;
  timeMinutes?: number;
  timeSeconds?: number;
  fontSize?: number;
}

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.scss'],
  providers: [GameSettingsService]
})
export class GameSettingsComponent implements OnInit {
  @Output() goBackEvent = new EventEmitter<boolean>();
  // @Output() submitSettingsEvent = new EventEmitter<Settings>();
  @Input() game;

  settings: Settings = {};

  settingsForm = new FormGroup({
    length: new FormControl(this.settings.length),
    timeMinutes: new FormControl(this.settings.timeMinutes),
    timeSeconds: new FormControl(this.settings.timeSeconds),
    fontSize: new FormControl()
  });

  constructor(private settingService: GameSettingsService) {}

  ngOnInit() {}

  onSubmit() {
    this.settingService.updateSettings(this.settingsForm.value);
    // this.submitSettingsEvent.emit(this.settingsForm.value);
    this.goBackEvent.emit(false);
  }

  goBack() {
    this.goBackEvent.emit(false);
  }

  buildSettingsObject() {
  }

}
