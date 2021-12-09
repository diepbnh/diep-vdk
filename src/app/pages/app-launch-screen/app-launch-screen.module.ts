import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppLaunchScreenPageRoutingModule } from './app-launch-screen-routing.module';

import { AppLaunchScreenPage } from './app-launch-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppLaunchScreenPageRoutingModule
  ],
  declarations: [AppLaunchScreenPage]
})
export class AppLaunchScreenPageModule {}
