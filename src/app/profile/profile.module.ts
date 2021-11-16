import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfileStatsComponent } from './profile-stats/profile-stats.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePage, ProfileHeaderComponent, ProfileStatsComponent]
})
export class ProfilePageModule {}
