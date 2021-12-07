import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateModalPage } from './template-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TemplateModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateModalPageRoutingModule {}
