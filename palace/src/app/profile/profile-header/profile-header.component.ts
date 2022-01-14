import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {

    this.auth.isAuthenticated$.subscribe((data => {
      if (data === true) {this.isLoggedIn = true;}
      // data ? true : this.isLoggedIn = true;
    }));
  }
}
