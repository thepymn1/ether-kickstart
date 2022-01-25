import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  { path: '', redirectTo: 'campaigns', pathMatch: 'full' },
  { path: 'campaigns', component: IndexComponent },
  {
    path: 'campaigns/new',
    loadChildren: () =>
      import('./pages/new-campaign/new-campaign.module').then(
        (m) => m.NewCampaignModule
      ),
  },
  {
    path: 'campaigns/show/:address',
    loadChildren: () =>
      import('./pages/campaign-show/campaign-show.module').then(
        (m) => m.CampaignShowModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
