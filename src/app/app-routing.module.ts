import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'template',
    loadChildren: () => import('./pages/template/template.module').then( m => m.TemplatePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'agree-terms-privacy-policy',
    loadChildren: () => import('./pages/agree-terms-privacy-policy/agree-terms-privacy-policy.module').then( m => m.AgreeTermsPrivacyPolicyPageModule)
  },
  {
    path: 'terms-use-hyperlink',
    loadChildren: () => import('./pages/terms-use-hyperlink/terms-use-hyperlink.module').then( m => m.TermsUseHyperlinkPageModule)
  },
  {
    path: 'privacy-policy-hyperlink',
    loadChildren: () => import('./pages/privacy-policy-hyperlink/privacy-policy-hyperlink.module').then( m => m.PrivacyPolicyHyperlinkPageModule)
  },
  {
    path: 'enter-vehicle-info',
    loadChildren: () => import('./pages/enter-vehicle-info/enter-vehicle-info.module').then( m => m.EnterVehicleInfoPageModule)
  },
  {
    path: 'verify-vehicle',
    loadChildren: () => import('./pages/verify-vehicle/verify-vehicle.module').then( m => m.VerifyVehiclePageModule)
  },
  {
    path: 'vin-locator',
    loadChildren: () => import('./pages/vin-locator/vin-locator.module').then( m => m.VinLocatorPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'vehicle-inspection-report',
    loadChildren: () => import('./pages/vehicle-inspection-report/vehicle-inspection-report.module').then( m => m.VehicleInspectionReportPageModule)
  },
  {
    path: 'template-modal',
    loadChildren: () => import('./pages/template-modal/template-modal.module').then( m => m.TemplateModalPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'app-launch-screen',
    loadChildren: () => import('./pages/app-launch-screen/app-launch-screen.module').then( m => m.AppLaunchScreenPageModule)
  },
  {
    path: 'dlc-location',
    loadChildren: () => import('./pages/dlc-location/dlc-location.module').then( m => m.DlcLocationPageModule)
  },
  {
    path: 'what-do-i-get',
    loadChildren: () => import('./pages/what-do-i-get/what-do-i-get.module').then( m => m.WhatDoIGetPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
