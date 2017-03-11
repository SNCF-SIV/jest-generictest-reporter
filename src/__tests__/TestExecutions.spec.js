const TestExecutions = require('../TestExecutions');
const xml = require('xml');
const { failedCase, pendingCase, passingCase } = require('./fixtures/testcase');
const fs = require('fs');
const testsuiteFixture = fs.readFileSync(__dirname + '/fixtures/testExecutions.xml', { encoding: 'utf-8' });

it('should produce a <testExecutions>', () => {
  
//AggregatedResult
const mock = {
  testResults: [
      {
        testFilePath: "foo/a.c",
        testResults: [pendingCase, failedCase, passingCase]
      },
      {
        testFilePath: "foo/b.c",
        testResults: [pendingCase, failedCase, passingCase]
      }
  ]
};

  const result = new TestExecutions(mock);
  const report = xml(result, {indent: '  '});
  expect(report).toEqual(testsuiteFixture.trim());
});
