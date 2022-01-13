import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent implements OnInit {

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((user => console.log(user)));
  }
}
