const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { containsDuplicate } = require("../index");

function assertContainsDuplicate(nums, expected) {
  const result = containsDuplicate(nums);

  assert.equal(typeof result, "boolean", "result should be a boolean");
  assert.equal(result, expected);
}

describe("containsDuplicate", () => {
  it("returns true when a value appears twice", () => {
    assertContainsDuplicate([1, 2, 3, 1], true);
  });

  it("returns false when all elements are distinct", () => {
    assertContainsDuplicate([1, 2, 3, 4], false);
  });

  it("returns true with multiple duplicates", () => {
    assertContainsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true);
  });

  it("returns false for a single element", () => {
    assertContainsDuplicate([1], false);
  });

  it("returns true for two identical elements", () => {
    assertContainsDuplicate([1, 1], true);
  });

  it("returns true when duplicate zeroes appear", () => {
    assertContainsDuplicate([0, 0], true);
  });

  it("returns true for duplicate negative numbers", () => {
    assertContainsDuplicate([-1, -2, -3, -1], true);
  });

  it("returns false for distinct negative numbers", () => {
    assertContainsDuplicate([-1, -2, -3], false);
  });

  it("returns true when duplicate is at the end", () => {
    assertContainsDuplicate([1, 2, 3, 4, 5, 1], true);
  });

  it("returns true when duplicates are adjacent", () => {
    assertContainsDuplicate([7, 7, 8, 9], true);
  });
});
