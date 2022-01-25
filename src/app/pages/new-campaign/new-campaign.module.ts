import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewCampaignRoutingModule } from './new-campaign-routing.module';
import { NewCampaignComponent } from './new-campaign.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewCampaignComponent],
  imports: [
    CommonModule,
    NewCampaignRoutingModule,
    SharedModule,
    MatInputModule,
    FormsModule,
  ],
})
export class NewCampaignModule {}
