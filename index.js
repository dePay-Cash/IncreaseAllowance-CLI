// main functions
const increaseFTAllowance = require("./src/zilliqa");
const payload = require("args-parser")(process.argv);

(async () => {
  try {
    const res = await increaseFTAllowance(payload);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
})();
