import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {


  constructor() {
    // Query for the toggle that is used to change between themes
    const toggle = document.querySelector('#themeToggle');

    // Listen for the toggle check/uncheck to toggle the dark class on the <body>
    toggle.addEventListener('ionChange', (ev) => {
      document.body.classList.toggle('dark', (ev as any).detail.checked);
    });

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((e) => this.checkToggle(e.matches));
    this.checkToggle(prefersDark.matches);
    // Called when the app loads
    // function loadApp() {
    //   checkToggle(prefersDark.matches);
    // }

    // Called by the media query to check/uncheck the toggle
    // function checkToggle(shouldCheck) {
    //   toggle.checked = shouldCheck;
    // }
  }

  ngOnInit() {
  }

  // loadApp() {
  //   checkToggle(prefersDark.matches);
  // }

  checkToggle(shouldCheck) {
    toggle.checked = shouldCheck;
  }

}
