import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import factory from 'ethereum/factory';
import web3 from 'ethereum/web3';
import Campaign from 'ethereum/build/contracts/Campaign.json';

export interface CampaignDetails {
  manager: string;
  minimumCont: number;
}

@Injectable({ providedIn: 'root' })
export class Web3Service {
  constructor(private router: Router) {}

  async getDeployedCampaigns(): Promise<string[]> {
    return await factory.methods.getDeployedCampaigns().call();
  }

  private async getAccounts() {
    return await web3.eth.requestAccounts();
  }

  async deployCampaign(minimum: number) {
    const [account] = await this.getAccounts();
    if (!account) {
      alert('you should install metamask to create campaigns');
      return;
    }
    await factory.methods.createCampaign(minimum).send({
      from: account,
      gas: '1000000',
    });
    this.router.navigateByUrl('/');
  }

  async getCampaignDetails(address: string) {
    const details: CampaignDetails = { manager: '', minimumCont: 0 };

    const campaign = this.createCampaignInstance(address);
    details.manager = await campaign.methods.manager().call();
    details.minimumCont = await campaign.methods.minimumContribution().call();

    console.log(details);
  }

  private createCampaignInstance(address: string) {
    return new web3.eth.Contract((Campaign as any).abi, address);
  }
}
