const TestExecutions = require('./src/TestExecutions');
const xml = require('xml');
const fs = require('fs');
const out = process.env.TEST_REPORT_PATH || process.cwd();

module.exports = (results) => {
  
  const testExecutions = new TestExecutions(results);
  const data = xml(testExecutions, { declaration: true, indent: '  ' });
  fs.writeFileSync(`${out}/test-report.xml`, data);
};
