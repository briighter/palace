import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  preferredTheme = localStorage.getItem('color-theme');

  constructor() { }

  ngOnInit(): void {
    this.checkPreferredTheme();
  }

  checkPreferredTheme() {
    if (this.preferredTheme === 'dark') {
      document.body.setAttribute('color-theme', 'dark');
    }
  }
}
