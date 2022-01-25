import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/shared';

@Component({
  selector: 'app-new-campaign',
  templateUrl: './new-campaign.component.html',
  styleUrls: ['./new-campaign.component.scss'],
})
export class NewCampaignComponent implements OnInit {
  value = '';

  constructor(private web3: Web3Service) {}

  ngOnInit(): void {}

  submit() {
    if (!this.value || isNaN(Number(this.value))) {
      alert('Please enter a valid number');
      this.value = '';
      return;
    }
    this.web3.deployCampaign(Number(this.value));
  }
}
