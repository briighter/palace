import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.scss'],
})
export class GameSettingsComponent implements OnInit {
  @Output() goBackEvent = new EventEmitter<boolean>();
  @Input() game;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {}

  saveSettings() {

  }

  goBack() {
    // this.router.navigate(['../numbers'], { relativeTo: this.route });
    this.goBackEvent.emit(false);
  }

}
