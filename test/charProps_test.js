var vows = require('vows'),
    assert = require('assert'),
    charProps = require('../lib/charProps.js'),
    suite = vows.describe('charProps');

var file = [
  // line, col, charCount (including line breaks)
  'line 1', // 0, 5, 5
  'another second line', // 1, 19, 25 (5 + 1 + 19)
  '3rd line!', // 2, 9, 35 (25 + 1 + 9)
  'line fourrrrrrrrr' // 3, 17, 53 (35 + 1 + 17)
].join('\n');

// Basic tests
suite.addBatch({
  'A new Indexer': {
    topic: function () {
      return charProps(file);
    },
    'can find the line of a character at a given index': function (indexer) {
      var index = 20, // d in 'second'
          char = file.charAt(index);

      // Sanity check
      assert.strictEqual(char, 'd', 'The character we are the line of finding is "d"');

      // Grab the line number of char
      var line = indexer.lineAt(index);

      // Assert the 'second' is on the second line
      assert.strictEqual(line, 1, 'The character at index 20 is on the second line');
    },
    'can find the column of a character at a given index': function (indexer) {
      var index = 35, // ! in 'line!'
          char = file.charAt(index);

      // Sanity check
      assert.strictEqual(char, '!', 'The character we are the column of finding is "!"');

      // Grab the column number of char
      var col = indexer.columnAt(index);

      // Assert it is in the eigth column
      assert.strictEqual(col, 8, 'The character at index 35 is in the ninth column');
    }
  }
});

// Intermediate tests
suite.addBatch({
  'A new Indexer': {
    'can find the line of a character at a given index using a minimum line': ''
  }
});

// Edge cases
suite.addBatch({
  'A new Indexer': {
    topic: function () {
      return charProps(file);
    },
    'considers a line feed part of the past line': function (indexer) {
      var index = 26, // \n of line 3
          char = file.charAt(index);

      // Sanity check
      assert.strictEqual(char, '\n', 'The character we are the column of finding is a line feed');

      // Grab the line number of char
      var line = indexer.lineAt(index);

      // Assert it is on the second line
      assert.strictEqual(line, 1, 'The character us on the second line');

      // Grab the column number of char
      var col = indexer.columnAt(index);

      // Assert it is in the nineteenth column
      assert.strictEqual(col, 19, 'The character at index 26 is in the zero-th column');
    }
  }
});

// Export the suite
suite['export'](module);