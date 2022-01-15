import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  isAuthenticated: any;
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    console.log('proflie page');
    this.auth.isAuthenticated$.subscribe(data => {
      this.isAuthenticated = data;
    });
  }

}
