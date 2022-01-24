import web3 from './web3';
import CampaignFactory from './build/contracts/CampaignFactory.json';

const instance = new web3.eth.Contract(
  (<any>CampaignFactory).abi,
  '0xD9ED6b0F7dD308be21e91a37Aa82e1c42690398B'
);

export default instance;
