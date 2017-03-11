const File = require('../File');
const xml = require('xml');
const { failedCase, pendingCase, passingCase } = require('./fixtures/testcase');
const fs = require('fs');
const testsuiteFixture = fs.readFileSync(__dirname + '/fixtures/file.xml', { encoding: 'utf-8' });

it('should produce a <file>', () => {

// objet de type TestResult
  const mock = {
    testFilePath: 'src/foo.js',
    testResults: [pendingCase, failedCase, passingCase],

  };

  const result = new File(mock);
  const report = xml(result, {indent: '  '});
  expect(report).toEqual(testsuiteFixture.trim());
});
