const File = require('./File');

class TestExecutions {
  constructor (results) {

    // result est un type AggregatedResult
   


    // ici, je classe par file.
    // les tests Result sont dupliqués pour autant de résultat de test.
    // ici, ma notion de File doit contenir tous les tests relatifs à un même fichier.

    // groupResultsByFile = results.testResults.reduce((acc, elt) => {

    //   if(acc[elt.testFilePath]) {
    //     acc[elt.testFilePath].push(elt)
    //   } else {
    //     acc[elt.testFilePath] = []
    //   }
    // }, {});

    let attr = {
      _attr: {
        version: 1,
      }
    };

    this.testExecutions = [attr].concat(results.testResults.map(result => new File(result)));
  }
}

module.exports = TestExecutions;
