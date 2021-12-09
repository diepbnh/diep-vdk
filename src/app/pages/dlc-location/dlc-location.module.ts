import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DlcLocationPageRoutingModule } from './dlc-location-routing.module';

import { DlcLocationPage } from './dlc-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DlcLocationPageRoutingModule
  ],
  declarations: [DlcLocationPage]
})
export class DlcLocationPageModule {}
