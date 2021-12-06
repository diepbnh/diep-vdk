import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyVehiclePageRoutingModule } from './verify-vehicle-routing.module';

import { VerifyVehiclePage } from './verify-vehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyVehiclePageRoutingModule
  ],
  declarations: [VerifyVehiclePage]
})
export class VerifyVehiclePageModule {}
