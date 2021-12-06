import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleInspectionReportPageRoutingModule } from './vehicle-inspection-report-routing.module';

import { VehicleInspectionReportPage } from './vehicle-inspection-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleInspectionReportPageRoutingModule
  ],
  declarations: [VehicleInspectionReportPage]
})
export class VehicleInspectionReportPageModule {}
