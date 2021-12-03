import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterVehicleInfoPageRoutingModule } from './enter-vehicle-info-routing.module';

import { EnterVehicleInfoPage } from './enter-vehicle-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterVehicleInfoPageRoutingModule
  ],
  declarations: [EnterVehicleInfoPage]
})
export class EnterVehicleInfoPageModule {}
