import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  preferredTheme = localStorage.getItem('color-theme');;
  constructor() {}

  ngOnInit() {
    this.checkPreferredTheme();
  }

  toggleTheme(event){
    if (event.detail.checked) {
      document.body.setAttribute('color-theme','dark');
      localStorage.setItem('color-theme','dark');
    } else {
      document.body.setAttribute('color-theme','light');
      localStorage.setItem('color-theme','light');
    }
  }

  checkPreferredTheme() {
    if (this.preferredTheme === 'dark') {
      const themeToggle = document.getElementById('themeToggle') as HTMLIonToggleElement;
      themeToggle.setAttribute('checked','');
    }
  }

}
