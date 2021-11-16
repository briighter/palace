import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-game-intro',
  templateUrl: './game-intro.component.html',
  styleUrls: ['./game-intro.component.scss'],
})
export class GameIntroComponent implements OnInit {
  @Output() beginPlayEvent = new EventEmitter<boolean>();
  @Output() changeSettingsEvent = new EventEmitter<boolean>();
  @Input() game;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {}

  ionViewDidLeave() {
    this.resetGameState();
  }

  beginPlay() {
    this.beginPlayEvent.emit(true);
  }

  resetGameState() {
    this.beginPlayEvent.emit(false);
  }

  goToSettings() {
    this.changeSettingsEvent.emit(true);
  }

}
