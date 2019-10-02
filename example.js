const fishersExactTest = require('.');

console.log('Reference: https://en.wikipedia.org/wiki/Fisher\'s_exact_test');
console.log('Data:', [1, 9, 11, 3]);
console.log('Test:', fishersExactTest(1, 9, 11, 3));
