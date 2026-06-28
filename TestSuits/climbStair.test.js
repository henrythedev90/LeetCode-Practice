const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { climbStair } = require("../weekTwo");

function assertClimbStair(n, expected) {
  const result = climbStair(n);

  assert.equal(typeof result, "number", "result should be a number");
  assert.equal(result, expected);
}

describe("climbStair", () => {
  it("returns 1 way for a single step", () => {
    assertClimbStair(1, 1);
  });

  it("returns 2 ways for two steps", () => {
    assertClimbStair(2, 2);
  });

  it("returns 3 ways for three steps", () => {
    assertClimbStair(3, 3);
  });

  it("returns 5 ways for four steps", () => {
    assertClimbStair(4, 5);
  });

  it("returns 8 ways for five steps", () => {
    assertClimbStair(5, 8);
  });

  it("returns 13 ways for six steps", () => {
    assertClimbStair(6, 13);
  });

  it("handles a larger staircase", () => {
    assertClimbStair(10, 89);
  });

  it("handles another larger staircase", () => {
    assertClimbStair(20, 10946);
  });
});
