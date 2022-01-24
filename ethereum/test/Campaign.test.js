const Campaign = artifacts.require("Campaign");
const CampaignFactory = artifacts.require("CampaignFactory");

contract("Campaigns", (accounts) => {
  let campaign;
  let factory;
  let campainAddress;

  beforeEach(async () => {
    factory = await CampaignFactory.new({ from: accounts[0] });

    await factory.createCampaign("100", { from: accounts[0] });

    [campainAddress] = await factory.getDeployedCampaigns();
    campaign = await Campaign.at(campainAddress);
  });

  it("deploys a factory and a campaign", () => {
    assert.ok(factory.address);
    assert.ok(campaign.address);
  });

  it("marks caller as campaign manager", async () => {
    const manager = await campaign.manager();
    assert.equal(accounts[0], manager);
  });

  it("allows people to contribute money and marks them as approvers", async () => {
    await campaign.contribute({ value: "200", from: accounts[1] });
    const isContributer = await campaign.approvers(accounts[1]);
    assert(isContributer);
  });

  it("requires a minimum contribution", async () => {
    try {
      await campaign.contribute({ value: "5", from: accounts[1] });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it("allows a manager to make a payment request", async () => {
    const description = "But batteries";
    await campaign.createRequest(description, "100", accounts[1]);
    const request = await campaign.requests(0);
    assert.equal(description, request.description);
  });

  it("processes requests", async () => {
    await campaign.contribute({
      from: accounts[0],
      value: web3.utils.toWei("5", "ether"),
    });

    await campaign.createRequest(
      "A",
      web3.utils.toWei("5", "ether", accounts[1]),
      accounts[1]
    );

    await campaign.approveRequest(0, { from: accounts[0] });

    await campaign.finalizeRequest(0, { from: accounts[0] });

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, "ether");
    balance = parseFloat(balance);

    assert(balance > 104);
  });
});
