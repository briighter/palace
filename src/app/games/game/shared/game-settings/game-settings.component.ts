import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.scss'],
})
export class GameSettingsComponent implements OnInit {
  @Output() goBackEvent = new EventEmitter<boolean>();
  @Input() game;
  finalTime: string;

  length = new FormControl('');
  timeMinutes = new FormControl('');
  timeSeconds = new FormControl('');
  fontSize = new FormControl('');

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {}

  saveSettings() {

  }

  goBack() {
    // this.router.navigate(['../numbers'], { relativeTo: this.route });
    this.goBackEvent.emit(false);
  }

}
