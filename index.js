const big = require('big.js');

// Expects big
function factorial(bigNum) {
  // const bigNum = typeof num === 'number' ? big(num) : num;
  if (bigNum.lt(0)) return big(-1);
  if (bigNum.eq(0)) return big(1);
  // return (num * factorial(num - 1));
  return bigNum.times(factorial(bigNum.minus(1)));
}

// Direction:
// -1 = left, which means a - 1
// 1 = right, which means a + 1
// Returns undefined if cannot extremify any more
function extremifyMatrix(a, b, c, d, direction) {
  const extremeMatrix = [
    a.plus(direction),
    b.minus(direction),
    c.minus(direction),
    d.plus(direction)
  ];
  if (extremeMatrix.findIndex((el) => el.lt(0)) !== -1) return undefined;
  return extremeMatrix;
}

function calcExactTest(a, b, c, d) {
  // const numerator = factorial(a + b) * factorial(c + d)
  // * factorial(a + c) * factorial(b + d);
  const numerator = factorial(a.plus(b))
    .times(factorial(c.plus(d)))
    .times(factorial(a.plus(c)))
    .times(factorial(b.plus(d)));
  // const denominator = (factorial(a) * factorial(b)
  // * factorial(c) * factorial(d) * factorial(a + b + c + d));
  const denominator = factorial(a.plus(b).plus(c).plus(d))
    .times(factorial(a))
    .times(factorial(b))
    .times(factorial(c))
    .times(factorial(d));
  return parseFloat(numerator.div(denominator), 10);
}

// Formula: http://mathworld.wolfram.com/FishersExactTest.html
// The values are in a matrix as follows:
// a   b
// c   d
module.exports = (a, b, c, d) => {
  const bigA = big(a);
  const bigB = big(b);
  const bigC = big(c);
  const bigD = big(d);

  // Extremify left
  let leftPValue = 0;
  let matrix = [bigA, bigB, bigC, bigD];
  do {
    leftPValue += calcExactTest(matrix[0], matrix[1], matrix[2], matrix[3]);
    matrix = extremifyMatrix(matrix[0], matrix[1], matrix[2], matrix[3], -1);
  } while (matrix !== undefined);

  // Extremify right
  let rightPValue = 0;
  matrix = [bigA, bigB, bigC, bigD];
  do {
    rightPValue += calcExactTest(matrix[0], matrix[1], matrix[2], matrix[3]);
    matrix = extremifyMatrix(matrix[0], matrix[1], matrix[2], matrix[3], 1);
  } while (matrix !== undefined);

  // Tailed
  const oneTailedPValue = Math.min(leftPValue, rightPValue);
  const twoTailedPValue = oneTailedPValue * 2;

  return {
    leftPValue,
    rightPValue,
    oneTailedPValue,
    twoTailedPValue
  };
};
