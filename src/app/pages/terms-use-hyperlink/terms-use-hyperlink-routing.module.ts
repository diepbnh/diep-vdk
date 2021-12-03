import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsUseHyperlinkPage } from './terms-use-hyperlink.page';

const routes: Routes = [
  {
    path: '',
    component: TermsUseHyperlinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsUseHyperlinkPageRoutingModule {}
