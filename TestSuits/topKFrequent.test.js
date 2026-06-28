const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { topKFrequent } = require("../mediumProblems");

function assertTopKFrequent(nums, k, expected) {
  const result = topKFrequent(nums, k);

  assert.equal(Array.isArray(result), true, "result should be an array");
  assert.equal(result.length, k, `result should contain exactly ${k} values`);

  const sortedResult = [...result].sort((a, b) => a - b);
  const sortedExpected = [...expected].sort((a, b) => a - b);

  assert.deepEqual(sortedResult, sortedExpected);
}

describe("topKFrequent", () => {
  it("returns the two most frequent elements in the classic example", () => {
    assertTopKFrequent([1, 1, 1, 2, 2, 3], 2, [1, 2]);
  });

  it("returns the only element when k is 1", () => {
    assertTopKFrequent([1], 1, [1]);
  });

  it("handles negative numbers", () => {
    assertTopKFrequent([-1, -1, 2, 2, 2, 3], 2, [-1, 2]);
  });

  it("returns all unique values when k equals number of distinct elements", () => {
    assertTopKFrequent([1, 2, 3], 3, [1, 2, 3]);
  });

  it("returns one value when one number dominates", () => {
    assertTopKFrequent([5, 5, 5, 5, 1, 2, 3], 1, [5]);
  });

  it("handles another classic example", () => {
    assertTopKFrequent([4, 1, -1, 2, -1, 2, 3], 2, [-1, 2]);
  });

  it("returns three most frequent elements", () => {
    assertTopKFrequent([1, 1, 1, 2, 2, 3, 4, 4, 4, 4], 3, [1, 2, 4]);
  });

  it("handles a tie only when all tied values are expected", () => {
    assertTopKFrequent([1, 1, 2, 2, 3], 2, [1, 2]);
  });

  it("returns the single most frequent value among many uniques", () => {
    assertTopKFrequent([10, 20, 10, 30], 1, [10]);
  });
});
