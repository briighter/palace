import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  constructor() {}

  ngOnInit() {
  }

  toggleTheme(event){
    if (event.detail.checked) {
      document.body.setAttribute('color-theme','dark');
    } else {
      document.body.setAttribute('color-theme','light');
    }
  }

  checkThemePreference(theme){
    if(theme.matches){
      theme.media = '(prefers-color-scheme: dark)';
    }
  }
}
