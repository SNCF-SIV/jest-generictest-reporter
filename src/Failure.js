class Failure {
  constructor (message, detailedMessage) {
    this.failure = [{

      _attr: {
        message
      }
    }, detailedMessage];
  }
}

module.exports = Failure;
