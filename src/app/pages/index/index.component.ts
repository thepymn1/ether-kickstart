import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/shared/services/web3.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor(private web3Service: Web3Service) {}

  ngOnInit(): void {
    this.web3Service;
  }
}
