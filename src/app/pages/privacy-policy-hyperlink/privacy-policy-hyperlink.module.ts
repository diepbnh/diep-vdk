import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacyPolicyHyperlinkPageRoutingModule } from './privacy-policy-hyperlink-routing.module';

import { PrivacyPolicyHyperlinkPage } from './privacy-policy-hyperlink.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacyPolicyHyperlinkPageRoutingModule
  ],
  declarations: [PrivacyPolicyHyperlinkPage]
})
export class PrivacyPolicyHyperlinkPageModule {}
