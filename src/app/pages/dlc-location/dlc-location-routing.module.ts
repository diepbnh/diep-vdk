import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DlcLocationPage } from './dlc-location.page';

const routes: Routes = [
  {
    path: '',
    component: DlcLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DlcLocationPageRoutingModule {}
