'use strict';

const fn = () => {
  const a = { name: 'Daniil' };
  let b = { name: 'Murad' };

  a.name = 'change a';
  b.name = 'change b';

  b = { name: 'new new new new new' };
};

module.exports = { fn };
