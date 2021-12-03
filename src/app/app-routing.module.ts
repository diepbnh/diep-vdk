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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
