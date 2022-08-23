// main functions
const payload = require("minimist")(process.argv.slice(2));
const increaseFTAllowance = require("./src/zilliqa");

async function main() {
  try {
    await increaseFTAllowance(payload);
  } catch (err) {
    console.error(err);
  }
}
