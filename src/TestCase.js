const Failure = require('./Failure');
const Error = require('./Error');
const Skipped = require('./Skipped');


class TestCase {
  constructor (result) {

   // le result est un AssertionResult ici

    let child = null;
    if(result.status === 'skipped') {
      // TODO : quel message je mets ici dans ce cas ?
       child = new Skipped("skipped", "skipped")
    }
    if(result.status === 'failed') {
      // soit c'est une erreur, soit une Failure..
      // TODO gérer un message d'erreur détaillé
      
      let message = result.failureMessages.join('\n');
      child = new Failure(message, message);

      // TODO comment récupère les Error ? 
    }

    let testCase = [
      {
        _attr: {
          name: result.title,
          duration: result.duration
        }
      }
    ];

    this.testCase = testCase;
    if(child) {
      this.testCase = this.testCase.concat(child);
    }
    
  }
}

module.exports = TestCase;
