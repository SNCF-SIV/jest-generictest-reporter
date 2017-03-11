module.exports = {
  failedCase: {
    title: 'should foo the bar',
    status: 'failed',
    ancestorTitles: ['boo', 'foo'],
    failureMessages: ['Assertion error'],
    duration: 500
  },
  pendingCase: {
    title: 'should foobar the baz',
    status: 'pending',
    ancestorTitles: ['boo', 'foo'],
    failureMessages: [],
    duration: 500
  },
  passingCase: {
    title: 'should foofoo the baz',
    status: 'passed',
    ancestorTitles: ['boo', 'foo'],
    failureMessages: [],
    duration: 500
  }
};
