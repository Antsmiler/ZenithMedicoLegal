import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'client-hub/:id', loadChildren: () => import('./client-hub/client-hub.module').then(m => m.ClientHubPageModule) },
  { path: 'client-details/:id/edit', loadChildren: () => import('./client-details/client-details.module').then(m => m.ClientDetailsPageModule) },   
  {
    path: 'medical-background',
    loadChildren: () => import('./sections/medical-background/medical-background.module').then( m => m.MedicalBackgroundPageModule)
  },  {
    path: 'current-complaints',
    loadChildren: () => import('./sections/current-complaints/current-complaints/current-complaints.module').then( m => m.CurrentComplaintsPageModule)
  },

 // Route for editing
  //{ path: 'section/:name', loadChildren: () => import('./section/section.module').then(m => m.SectionPageModule) },
  //{ path: 'document-management/:id', loadChildren: () => import('./document-management/document-management.module').then(m => m.DocumentManagementPageModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
