function climbStair(n) {
  if (n === 0 || n === 1) return 1;
  return climbStair(n - 1) + climbStair(n - 2);
}

function isValid(s) {
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (map[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0 || map[stack.pop()] != char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

module.exports = { climbStair, isValid };
