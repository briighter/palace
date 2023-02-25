import { Route } from '@angular/compiler/src/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.scss'],
})
export class GameResultComponent implements OnInit {
  @Output() beginPlayEvent = new EventEmitter<boolean>();
  @Output() changeSettingsEvent = new EventEmitter<boolean>();

  @Input() gameResult: string;
  @Input() game;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {}

  beginPlay() {
    this.beginPlayEvent.emit(true);
  }

  goToSettings() {
    this.changeSettingsEvent.emit(true);
  }

  goToGames() {
    this.router.navigate(['../../../games'], { relativeTo: this.route });
  }
}
