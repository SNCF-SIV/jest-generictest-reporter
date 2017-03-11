const TestCase = require('../TestCase');
const xml = require('xml');

it('should produce a <testCase>', () => {
  const testcase = {
    title: 'should foo bar',
    duration: 500,
  };
  const result = new TestCase(testcase);
  const report = xml(result);
  const expected = `<testCase name="should foo bar" duration="500"></testCase>`;
  expect(report).toEqual(expected);
});

it('should produce a <failure>', () => {
  const testcase = {
    title: 'should foo bar',
    duration: 500,
    status: 'failed',
    ancestorTitles: ['boo', 'foo'],
    failureMessages: ['Assertion error']
  };
  const result = new TestCase(testcase);
  const report = xml(result);
  const expected = `<testCase name="should foo bar" duration="500"><failure message="Assertion error">Assertion error</failure></testCase>`;
  expect(report).toEqual(expected);
});
