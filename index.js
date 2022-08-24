// main functions
const increaseFTAllowance = require("./src/zilliqa");
const payload = require("args-parser")(process.argv);

(async () => {
  try {
    await increaseFTAllowance(payload);
  } catch (err) {
    console.error(err);
  }
})();
