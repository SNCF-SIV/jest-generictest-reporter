class Skipped {
  constructor (message, detailedMessage) {
    this.skipped = [{
      _attr: {
        message
      }
    }, detailedMessage];
  }
}

module.exports = Skipped;
