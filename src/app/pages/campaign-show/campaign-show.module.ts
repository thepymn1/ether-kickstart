import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignShowRoutingModule } from './campaign-show-routing.module';
import { CampaignShowComponent } from './campaign-show.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CampaignShowComponent],
  imports: [CommonModule, CampaignShowRoutingModule, SharedModule],
})
export class CampaignShowModule {}
