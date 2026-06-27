const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { twoSum } = require("./index");

function assertTwoSum(nums, target, expected) {
  const result = twoSum(nums, target);

  assert.equal(Array.isArray(result), true, "result should be an array");
  assert.equal(result.length, 2, "result should contain exactly 2 indices");

  const [i, j] = result;
  assert.ok(i !== j, "indices must be different");
  assert.ok(
    i >= 0 && i < nums.length && j >= 0 && j < nums.length,
    "indices must be within bounds",
  );
  assert.equal(
    nums[i] + nums[j],
    target,
    `nums[${i}] + nums[${j}] should equal ${target}`,
  );

  const sortedResult = [...result].sort((a, b) => a - b);
  const sortedExpected = [...expected].sort((a, b) => a - b);
  assert.deepEqual(sortedResult, sortedExpected);
}

describe("twoSum", () => {
  it("finds the pair in a classic example", () => {
    assertTwoSum([2, 7, 11, 15], 9, [0, 1]);
  });

  it("finds the pair when answer is not at the start", () => {
    assertTwoSum([3, 2, 4], 6, [1, 2]);
  });

  it("handles duplicate values", () => {
    assertTwoSum([3, 3], 6, [0, 1]);
  });

  it("handles negative numbers", () => {
    assertTwoSum([-1, -2, -3, -4, -5], -8, [2, 4]);
  });

  it("handles a mix of positive and negative numbers", () => {
    assertTwoSum([-3, 4, 3, 90], 0, [0, 2]);
  });

  it("handles zeros in the array", () => {
    assertTwoSum([0, 4, 3, 0], 0, [0, 3]);
  });

  it("handles two-element array", () => {
    assertTwoSum([10, 20], 30, [0, 1]);
  });

  it("handles larger values", () => {
    assertTwoSum([1000000, 2000000, 3000000], 5000000, [1, 2]);
  });
});
