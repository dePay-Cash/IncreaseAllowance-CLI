require("dotenv").config();

const { Zilliqa } = require("@zilliqa-js/zilliqa");
const { BN, Long, bytes, units } = require("@zilliqa-js/util");

const zilliqa = new Zilliqa("https://dev-api.zilliqa.com"); // mainnet: 'https://api.zilliqa.com/'
const chainId = 333; // mainnet: chainId = 1
const msgVersion = 1;
const VERSION = bytes.pack(chainId, msgVersion);

/*
payload = {
    ftContractAddress: <ftContractAddress>, --> type: string
    ftContractOwnerPrivateKey: <ftContractOwnerPrivateKey>, --> type: string
    spender: <accountAddressToBeAllowed>, --> type: string
    amount: <amountOfFTToBeAllowed> --> type: string
}
*/
const increaseFTAllowance = async (payload) => {
  try {
    const ftContractAddress = payload.ftContractAddress;
    const privateKey = payload.ftContractOwnerPrivateKey;
    const spender = payload.spender;
    const amount = payload.amount;
    zilliqa.wallet.addByPrivateKey(privateKey);
    const ftContract = zilliqa.contracts.at(ftContractAddress);
    let tx = {
      version: VERSION,
      amount: new BN(0),
      gasPrice: units.toQa("4000", units.Units.Li),
      gasLimit: Long.fromNumber(10000),
    };
    const response = await ftContract.call(
      "IncreaseAllowance",
      [
        {
          vname: "spender",
          type: "ByStr32",
          value: spender,
        },
        {
          vname: "amount",
          type: "Uint128",
          value: amount,
        },
      ],
      tx
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = increaseFTAllowance;
