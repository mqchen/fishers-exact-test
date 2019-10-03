# Fisher's exact test

This is a javascript implementation for doing Fisher's exact tests.

Resources to learn about the test:

- https://en.wikipedia.org/wiki/Fisher%27s_exact_test
- http://vassarstats.net/tab2x2.html
- http://mathworld.wolfram.com/FishersExactTest.html

### Usage

Install:

```
npm i --save fishers-exact-test
```

Usage:

```javascript
const fishersExactTest = require('fishers-exact-test');

fishersExactTest(1, 9, 11, 3);
```

Output:

```javascript
{ leftPValue: 0.0013797280926100416,
  rightPValue: 0.9999663480953023,
  oneTailedPValue: 0.0013797280926100416,
  twoTailedPValue: 0.002759456185220083 }
```

### Disclaimer

There may be bugs. Don't use it for rocket surgery.
