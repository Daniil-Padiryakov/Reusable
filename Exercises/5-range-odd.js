'use strict';

const rangeOdd = (start, end) => {
  const res = [];
  if (start > end) {
    return res;
  }
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      res.push(i);
    }
    if (i === end) {
      return res;
    }
  }
};

module.exports = { rangeOdd };
