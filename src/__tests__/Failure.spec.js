const Failure = require('../Failure');
const xml = require('xml');

it('should render a <failure> with message', () => {
  const mock = 'expected 1 to be 1';
  const detailedMessage = 'detailed'
  const result = new Failure(mock, detailedMessage);
  const report = xml(result);

  expect(report).toEqual(`<failure message="${mock}">${detailedMessage}</failure>`);
});
