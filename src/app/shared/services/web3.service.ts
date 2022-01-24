import { Injectable } from '@angular/core';
import factory from 'ethereum/factory';

@Injectable({ providedIn: 'root' })
export class Web3Service {
  constructor() {
    console.log(this.getDeployedCampaigns());
  }

  async getDeployedCampaigns() {
    return await factory.methods.getDeployedCampaigns().call();
  }
}
