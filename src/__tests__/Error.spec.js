const Error = require('../Error');
const xml = require('xml');

it('should render a <error> with message', () => {
  const mock = 'expected 1 to be 1';
  const detailedMessage = 'detailed'
  const result = new Error(mock, detailedMessage);
  const report = xml(result);

  expect(report).toEqual(`<error message="${mock}">${detailedMessage}</error>`);
});
