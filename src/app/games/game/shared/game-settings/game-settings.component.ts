import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.scss'],
})
export class GameSettingsComponent implements OnInit {
  @Output() goBackEvent = new EventEmitter<boolean>();
  @Output() submitSettingsEvent = new EventEmitter<any>();
  @Input() game;
  finalTime: string;

  settingsForm = new FormGroup({
    length: new FormControl(5),
    timeMinutes: new FormControl(0),
    timeSeconds: new FormControl(2),
    fontSize: new FormControl('')
  });

  constructor() { }

  ngOnInit() {}

  onSubmit() {
    console.log('Inside Settings');
    console.log(this.settingsForm.value);
    this.submitSettingsEvent.emit(this.settingsForm.value);
  }

  goBack() {
    this.goBackEvent.emit(false);
  }

}
