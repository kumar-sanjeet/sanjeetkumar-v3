const si = require('react-icons/si');
const fa = require('react-icons/fa');
const fc = require('react-icons/fc');

const findIcon = (lib, query) => {
  return Object.keys(lib).filter(key => key.toLowerCase().includes(query.toLowerCase()));
};

console.log('Harvard:', findIcon(si, 'harvard'));
console.log('Berkeley:', findIcon(si, 'berkeley'));
console.log('HSBC:', findIcon(si, 'hsbc'));
console.log('Siemens:', findIcon(si, 'siemens'));
console.log('OpenAI:', findIcon(si, 'openai'));
