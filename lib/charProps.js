/**
 * Indexer constructor (takes index and performs pre-emptive caching)
 * @constructor
 * @param {String} input Content to index
 */
function Indexer(input) {
  this.input = input;

  // Break up lines by line breaks
  var lines = input.split('\n');

  // Iterate over the lines until we reach the end or we hit our index
  var i = 0,
      len = lines.length,
      line,
      lineStart = 0,
      lineEnd,
      lineMap = {'length': len};
  for (; i < len; i++) {
    // Grab the line
    line = lines[i];

    // Calculate the line end (includes \n we removed)
    lineEnd = lineStart + line.length + 1;

    // Save the line to its map
    lineMap[i] = {'start': lineStart, 'end': lineEnd};

    // Overwrite lineStart with lineEnd
    lineStart = lineEnd;
  }

  // Save the lineMap to this
  this.lineMap = lineMap;
}
Indexer.prototype = {
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
  lineAt: function (index, options) {
    // TODO: We can binary search here
    // Grab the line map and iterate over it
    var lineMap = this.lineMap,
        i = minLine || 0,
        len = lineMap.length,
        lineItem;

    for (; i < len; i++) {
      // TODO: If binary searching, this requires both above and below
      // If the index is under end of the lineItem, stop
      lineItem = lineMap[i];

      if (index <= lineItem.end) {
        break;
      }
    }

    // Return the line we stopped on
    return i;
  },
  /**
   * Get the column of the character at a certain index
   * @param {Number} index Index of character to retrieve column of
   * @returns {Number} Column number of character
   */
  columnAt: function (index) {
    // Start at the index
    var input = this.input,
        col = 0,
        char,
        i = index;

    // If the index is negative, return now
    if (index < 0) {
      return 0;
    }

    // Continue left until index <= 0 or we hit a line break
    for (; i >= 0; i--, col += 1) {
      char = input.charAt(i);
      if (char === '\n') {
        break;
      }
    }

    // Return the col of our index
    return col;
  }
};

module.exports = Indexer;