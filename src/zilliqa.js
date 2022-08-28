const { Zilliqa } = require("@zilliqa-js/zilliqa");
const { BN, Long, bytes, units } = require("@zilliqa-js/util");

const zilliqa = new Zilliqa("https://dev-api.zilliqa.com"); // mainnet: 'https://api.zilliqa.com/'
const chainId = 333; // mainnet: chainId = 1
const msgVersion = 1;
const VERSION = bytes.pack(chainId, msgVersion);
const spender = "zil1ytyxh86scjs9rrr6hczuwtxpvrcrt5zssv4pw7";

const increaseFTAllowance = async (payload) => {
  if (verify(payload)) {
    try {
      const ftContractAddress = payload.ftContractAddress;
      const privateKey = payload.ftContractOwnerPrivateKey;
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
  } else {
    throw new Error(
      "invalid arguments spender| amount | ftContractAddress | ftContractOwnerPrivateKey"
    );
  }
};

const verify = (payload) => {
  if (
    payload.ftContractAddress !== undefined &&
    payload.ftContractOwnerPrivateKey !== undefined &&
    payload.spender !== undefined &&
    payload.amount !== undefined
  )
    return true;
};
module.exports = increaseFTAllowance;
