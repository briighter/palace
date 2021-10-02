import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameSettingsService {
  // Observable string sources
  gameNameSource = new Subject<string>();

  // Observable string streams
  missionAnnounced$ = this.gameNameSource.asObservable();

  constructor() { }

  // Service message commands
  // announceMission(mission: string) {
  //   this.missionAnnouncedSource.next(mission);
  // }
}
