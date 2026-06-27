function climbStair(n) {
  if (n === 0 || n === 1) return 1;
  return climbStair(n - 1) + climbStair(n - 2);
}

module.exports = { climbStair };
