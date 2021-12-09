import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatDoIGetPage } from './what-do-i-get.page';

const routes: Routes = [
  {
    path: '',
    component: WhatDoIGetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatDoIGetPageRoutingModule {}
