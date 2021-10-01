import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.scss'],
})
export class GameSettingsComponent implements OnInit {
  @Input() game;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {}

  goBack() {
    this.router.navigate(['./../numbers'], { relativeTo: this.route });
  }
}
