function factorial(num) {
  if (num < 0) return -1;
  if (num === 0) return 1;
  return (num * factorial(num - 1));
}

// Direction:
// -1 = left, which means a - 1
// 1 = right, which means a + 1
// Returns undefined if cannot extremify any more
function extremifyMatrix(a2, b2, c2, d2, direction) {
  const extremeMatrix = [
    a2 + direction,
    b2 - direction,
    c2 - direction,
    d2 + direction
  ];
  if (extremeMatrix.findIndex((el) => el < 0) !== -1) return undefined;
  return extremeMatrix;
}

function calcExactTest(a2, b2, c2, d2) {
  const numerator = factorial(a2 + b2) * factorial(c2 + d2) * factorial(a2 + c2) * factorial(b2 + d2);
  const denominator = (factorial(a2) * factorial(b2) * factorial(c2) * factorial(d2) * factorial(a2 + b2 + c2 + d2));
  return numerator / denominator;
}

// Formula: http://mathworld.wolfram.com/FishersExactTest.html
// The values are in a matrix as follows:
// a   b
// c   d
module.exports = (a, b, c, d) => {
  // Extremify left
  let leftPValue = 0;
  let matrix = [a, b, c, d];
  do {
    leftPValue += calcExactTest(matrix[0], matrix[1], matrix[2], matrix[3]);
    matrix = extremifyMatrix(matrix[0], matrix[1], matrix[2], matrix[3], -1);
  } while (matrix !== undefined);

  // Extremify right
  let rightPValue = 0;
  matrix = [a, b, c, d];
  do {
    rightPValue += calcExactTest(matrix[0], matrix[1], matrix[2], matrix[3]);
    matrix = extremifyMatrix(matrix[0], matrix[1], matrix[2], matrix[3], 1);
  } while (matrix !== undefined);

  const oneTailedPValue = Math.min(leftPValue, rightPValue);
  const twoTailedPValue = oneTailedPValue * 2;
  // Output
  return {
    leftPValue,
    rightPValue,
    oneTailedPValue,
    twoTailedPValue
  };
};
