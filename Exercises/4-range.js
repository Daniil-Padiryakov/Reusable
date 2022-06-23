'use strict';

const range = (start, end) => {
  const res = [];
  if (start > end) {
    return res;
  }
  for (let i = start; i <= end; i++) {
    res.push(i);
    if (i === end) {
      return res;
    }
  }
};

module.exports = { range };
