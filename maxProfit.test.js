const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { maxProfit } = require("./index");

function assertMaxProfit(prices, expected) {
  const result = maxProfit(prices);

  assert.equal(typeof result, "number", "result should be a number");
  assert.equal(result, expected);
}

describe("maxProfit", () => {
  it("returns max profit for the classic example", () => {
    assertMaxProfit([7, 1, 5, 3, 6, 4], 5);
  });

  it("returns 0 when prices only decrease", () => {
    assertMaxProfit([7, 6, 4, 3, 1], 0);
  });

  it("returns profit for two days with a gain", () => {
    assertMaxProfit([1, 2], 1);
  });

  it("returns 0 for two days with no gain", () => {
    assertMaxProfit([2, 1], 0);
  });

  it("returns 0 for a single day", () => {
    assertMaxProfit([5], 0);
  });

  it("returns 0 when all prices are the same", () => {
    assertMaxProfit([3, 3, 3], 0);
  });

  it("returns profit when the best sell day is at the end", () => {
    assertMaxProfit([2, 1, 2, 0, 1, 2], 2);
  });

  it("does not allow selling before buying", () => {
    assertMaxProfit([2, 4, 1], 2);
  });

  it("returns profit for steadily increasing prices", () => {
    assertMaxProfit([1, 2, 3, 4, 5], 4);
  });

  it("handles a later dip with a strong recovery", () => {
    assertMaxProfit([3, 2, 6, 5, 0, 3], 4);
  });
});
