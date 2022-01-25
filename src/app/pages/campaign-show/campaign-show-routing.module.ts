import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignShowComponent } from './campaign-show.component';

const routes: Routes = [{ path: '', component: CampaignShowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignShowRoutingModule { }
