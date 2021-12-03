import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsUseHyperlinkPageRoutingModule } from './terms-use-hyperlink-routing.module';

import { TermsUseHyperlinkPage } from './terms-use-hyperlink.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsUseHyperlinkPageRoutingModule
  ],
  declarations: [TermsUseHyperlinkPage]
})
export class TermsUseHyperlinkPageModule {}
