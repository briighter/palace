import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

import { GameServiceService } from 'src/app/games/game/shared/services/game-service.service';
import { GameHistory } from 'src/app/shared/models/game-history';


@Component({
  selector: 'app-profile-stats',
  templateUrl: './profile-stats.component.html',
  styleUrls: ['./profile-stats.component.scss'],
})
export class ProfileStatsComponent implements OnInit {
  gameStats: GameHistory[];
  userEmail: string;

  constructor(public auth: AuthService, private gameService: GameServiceService) { }

  ngOnInit() {
    this.auth.user$.subscribe(data => {
      this.userEmail = data.email;
      this.showGameData(this.userEmail);
    });
  }

  showGameData(userInfo: string) {
    this.gameService.getAllGameHistoryForUser(userInfo)
      .subscribe(data => this.gameStats = data);
  }
}
