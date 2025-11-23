const si = require('react-icons/si');

const icons = Object.keys(si);
const harvard = icons.filter(icon => icon.toLowerCase().includes('harvard'));
const berkeley = icons.filter(icon => icon.toLowerCase().includes('berkeley'));

console.log('Harvard Icons:', harvard);
console.log('Berkeley Icons:', berkeley);
