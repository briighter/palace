import { AuthModule } from '@auth0/auth0-angular';
import config from './../../capacitor.config.json';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

// Build the URL that Auth0 should redirect back to
const redirectUri = `${config.appId}://dev--y0shigw.us.auth0.com/capacitor/${config.appId}/callback`;

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev--y0shigw.us.auth0.com',
      clientId: '13ZgOQwcgyXvHFYMw8gQN85NYpn26Dqs',
      redirectUri
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
