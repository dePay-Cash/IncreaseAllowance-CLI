// main functions
const payload = require("minimist")(process.argv.slice(2));
const increaseFTAllowance = require("./src/zilliqa");
console.log(payload);

async function main() {
  await increaseFTAllowance(payload);
}
