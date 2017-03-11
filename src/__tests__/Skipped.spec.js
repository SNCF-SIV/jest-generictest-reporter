const Skipped = require('../Skipped');
const xml = require('xml');

it('should render a <skipped> with message', () => {
  const mock = 'expected 1 to be 1';
  const detailedMessage = 'detailed'
  const result = new Skipped(mock, detailedMessage);
  const report = xml(result);

  expect(report).toEqual(`<skipped message="${mock}">${detailedMessage}</skipped>`);
});
