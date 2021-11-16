import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { tap } from 'rxjs/operators';
import config from '../../../../capacitor.config.json';

// Build the URL to return back to your app after logout
// const returnTo = `${config.appId}://dev--y0shigw.us.auth0.com/capacitor/${config.appId}/callback`;
const returnTo = `http://localhost:8100`;

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss'],
})
export class LogoutButtonComponent implements OnInit {

  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document,
  ) {}

  ngOnInit() {}

  logoutOld(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }

  logout() {
    // Use the SDK to build the logout URL
    this.auth
      .buildLogoutUrl({ returnTo })
      .pipe(
        tap((url) => {
          // Call the logout fuction, but only log out locally
          this.auth.logout({ localOnly: true });
          // Redirect to Auth0 using the Browser plugin, to clear the user's session
          // Browser.open({ url }); // TODO: This is useless or usefull
        })
      )
      .subscribe();
  }
}
