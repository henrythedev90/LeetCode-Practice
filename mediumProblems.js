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
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }
  let result = Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k);
  return result.map((pair) => Number(pair[0]));
}

module.exports = { groupAnagrams, topKFrequent };
