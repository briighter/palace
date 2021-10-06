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
  private settingsSource = new Subject<Settings>();

  // Observable string streams
  settings$ = this.settingsSource.asObservable();
  
  constructor() { }


}
