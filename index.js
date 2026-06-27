function twoSum(nums, target) {
  let dictionary = {};
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (dictionary[difference] !== undefined) {
      return [dictionary[difference], i];
    }
    dictionary[nums[i]] = i;
  }
}

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let sObject = {};
  for (let i = 0; i < s.length; i++) {
    if (!sObject[s[i]]) {
      sObject[s[i]] = 1;
    } else {
      sObject[s[i]]++;
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (!sObject[t[j]] || sObject[t[j]] === 0) {
      return false;
    }
    sObject[t[j]]--;
  }
  return true;
}

function containsDuplicate(nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      return true;
    } else {
      obj[nums[i]] = 1;
    }
  }
  return false;
}

function maxProfit(prices) {
  let lowest = Infinity;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (lowest > prices[i]) {
      lowest = prices[i];
    }
    if (prices[i] > lowest) {
      let possibleProfit = prices[i] - lowest;
      if (possibleProfit > profit) {
        profit = possibleProfit;
      }
    }
  }
  return profit;
}

module.exports = { twoSum, isAnagram, containsDuplicate, maxProfit };
