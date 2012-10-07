# char-props

Retrieve line and column of a character at a given index.

## Getting Started
Install the module with: `npm install charProps`

## Documentation
```js
// charProps is a function which invokes the Indexer constructor

// Indexer JSDoc
/**
 * Indexer constructor (takes index and performs pre-emptive caching)
 * @constructor
 * @param {String} input Content to index
 */

// Indexer.lineAt JSDoc
/**
 * Get the line of the character at a certain index
 * @param {Number} index Index of character to retrieve line of
 * @param {Object} [options] Options to use for search
 * @param {Number} [options.minLine=0] Minimum line for us to search on
 * TODO: The following still have to be built/implemented
 * @param {Number} [options.maxLine=lines.length] Maximum line for us to search on
 * @param {String} [options.guess="average"] Affects searching pattern -- can be "high", "low", or "average" (linear top-down, linear bottom-up, or binary)
 * @returns {Number} Line number of character
 */

// Indexer.columnAt JSDoc
/**
 * Get the column of the character at a certain index
 * @param {Number} index Index of character to retrieve column of
 * @returns {Number} Column number of character
 */
```

## Examples
_(Coming soon)_

For now, please refer to [tests](/blob/master/test/charProps_test.js).

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using vows.

## License
Copyright (c) 2012 Todd Wolfson
Licensed under the MIT license.
