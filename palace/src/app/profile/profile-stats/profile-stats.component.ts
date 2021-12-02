import { Component, OnInit } from '@angular/core';
import { GameServiceService } from 'src/app/games/game/shared/services/game-service.service';
import { GameHistory } from 'src/app/shared/models/game-history';


@Component({
  selector: 'app-profile-stats',
  templateUrl: './profile-stats.component.html',
  styleUrls: ['./profile-stats.component.scss'],
})
export class ProfileStatsComponent implements OnInit {
  gameStats: GameHistory[];

  constructor(private gameService: GameServiceService) { }

  ngOnInit() {
    this.showGameData();
  }

  showGameData() {
    this.gameService.getAllGameHistory()
      .subscribe(data => this.gameStats = data);
  }
}
