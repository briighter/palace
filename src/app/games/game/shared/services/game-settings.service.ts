import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface Settings {
  length: number;
  timeMinutes: number;
  timeSeconds: number;
  fontSize: number;
}

@Injectable({
  providedIn: 'root'
})
export class GameSettingsService {
  // Observable string sources
  settingsSource = new Subject<Settings>();

  // Observable string streams
  settings$ = this.settingsSource.asObservable();

  constructor() { }

  // Service message commands
  getSettings(settings: Settings) {
    this.settingsSource.next(settings);
  }

}
