import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Web3Service } from 'src/app/shared';

@Component({
  selector: 'app-campaign-show',
  templateUrl: './campaign-show.component.html',
  styleUrls: ['./campaign-show.component.scss'],
})
export class CampaignShowComponent implements OnInit {
  address = '';
  constructor(private route: ActivatedRoute, private web3: Web3Service) {}

  ngOnInit(): void {
    this.address = this.route.snapshot.params['address'];
    this.web3.getCampaignDetails(this.address);
  }
}
