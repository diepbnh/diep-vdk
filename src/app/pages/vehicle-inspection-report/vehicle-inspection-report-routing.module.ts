import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleInspectionReportPage } from './vehicle-inspection-report.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleInspectionReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleInspectionReportPageRoutingModule {}
