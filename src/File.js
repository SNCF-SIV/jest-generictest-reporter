const TestCase = require('./TestCase');

class File {
  constructor (result) {
    // result ici est un Test https://github.com/facebook/jest/blob/master/types/TestResult.js

    // testsResult -> Array<AssertionResult>
    let testcases = result.testResults.filter(result => (result.status !== 'pending')).map(result => new TestCase(result));

    let suite = {
      _attr: {
        path: result.testFilePath,
      }
    };

    this.file = [suite].concat(testcases);
  }
}

module.exports = File;
