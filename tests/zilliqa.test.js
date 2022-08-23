"use strict";
const increaseFTAllowance = require("../src/zilliqa");

/*
payload = {
    ftContractAddress: <ftContractAddress>, --> type: string
    ftContractOwnerPrivateKey: <ftContractOwnerPrivateKey>, --> type: string
    spender: <accountAddressToBeAllowed>, --> type: string
    amount: <amountOfFTToBeAllowed> --> type: string
}
*/

test("test increaseFTAllowance function", async () => {
  const response = await increaseFTAllowance();
  expect(response).toStrictEqual({});
});
