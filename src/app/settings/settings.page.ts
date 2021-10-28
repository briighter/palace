import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  // Query for the toggle that is used to change between themes
  toggle = document.querySelector('#themeToggle') as HTMLIonToggleElement;
  prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  constructor() {
    if (this.toggle) {
      // Listen for the toggle check/uncheck to toggle the dark class on the <body>
      this.toggle.addEventListener('ionChange', (ev) => {
        document.body.classList.toggle('dark', (<any>ev).detail.checked);
      });
    }

    // Listen for changes to the prefers-color-scheme media query
    this.prefersDark.addListener((e) => this.checkToggle(e.matches));

  }

  ngOnInit() {
    if (this.toggle) {
      this.checkToggle(this.prefersDark.matches);
    }
  }

  // Called when the app loads
  // loadApp() {
  //   this.checkToggle(this.prefersDark.matches);
  // }

  // Called by the media query to check/uncheck the toggle
  checkToggle(shouldCheck) {
    this.toggle.checked = shouldCheck;
  }

}
