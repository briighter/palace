import { Component, OnInit } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-signup-button',
  templateUrl: './signup-button.component.html',
  styleUrls: ['./signup-button.component.scss'],
})
export class SignupButtonComponent implements OnInit {

  constructor(public auth: AuthService) {}

  ngOnInit() {}

  loginWithRedirect(): void {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    this.auth.loginWithRedirect({ screen_hint: 'signup' });
  }
}
