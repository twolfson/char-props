var vows = require('vows'),
    charProps = require('../lib/charProps.js'),
    suite = vows.describe('charProps');

// Basic tests
suite.addBatch({
  'A new Indexer': {
    'can find the line of a character at a given index': '',
    'can find the column of a character at a given index': ''
  }
});

// Intermediate tests
suite.addBatch({
  'A new Indexer': {
    'can find the line of a character at a given index using a minimum line': ''
  }
});

// Export the suite
suite['export'](module);