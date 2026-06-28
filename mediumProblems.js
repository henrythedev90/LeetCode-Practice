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

/**
 * Top K Frequent Elements
 *
 * Given an integer array nums and an integer k,
 * return the k most frequent elements.
 * You may return the answer in any order.
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
function topKFrequent(nums, k) {
  // TODO: implement your solution here
  throw new Error("Not implemented");
}

module.exports = { groupAnagrams, topKFrequent };
