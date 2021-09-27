import { Route } from '@angular/compiler/src/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.scss'],
})
export class GameResultComponent implements OnInit {
  @Output() beginPlayEvent = new EventEmitter<boolean>();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {}

  beginPlay() {
    this.beginPlayEvent.emit(true);
  }

  goToGames() {
    this.router.navigate(['../../../games'], { relativeTo: this.route });
  }
}
