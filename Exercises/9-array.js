'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Marcus', phone: '+38046577777654433' },
  { name: 'Aurelius', phone: '+3855555554433' },
];

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) obj.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
