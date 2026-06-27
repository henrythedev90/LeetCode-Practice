function groupAnagrams(str) {
  let dictionary = {};
  for (let i = 0; i < str.length; i++) {
    let sorted = str[i].split("").sort().join("");
    if (!dictionary[sorted]) {
      dictionary[sorted] = [];
    }
    dictionary[sorted].push(str[i]);
  }
  return Object.values(dictionary);
}

module.exports = { groupAnagrams };
