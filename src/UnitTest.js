const file = require('./File');

class UnitTest {
  constructor (results) {
    console.log("testResults", JSON.stringify(results.testResults));
    this.unitTest = results.testResults.map((result, i) => new File(i, result));
  }
}

module.exports = UnitTest;
