import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCampaignComponent } from './new-campaign.component';

const routes: Routes = [{ path: '', component: NewCampaignComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewCampaignRoutingModule { }
