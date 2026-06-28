const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { isValid } = require("./weekTwo");

function assertIsValid(s, expected) {
  const result = isValid(s);

  assert.equal(typeof result, "boolean", "result should be a boolean");
  assert.equal(result, expected);
}

describe("isValid", () => {
  it("returns true for the classic valid example", () => {
    assertIsValid("()[]{}", true);
  });

  it("returns false when closing bracket does not match", () => {
    assertIsValid("(]", false);
  });

  it("returns false when brackets close in the wrong order", () => {
    assertIsValid("([)]", false);
  });

  it("returns true for properly nested brackets", () => {
    assertIsValid("{[]}", true);
  });

  it("returns true for an empty string", () => {
    assertIsValid("", true);
  });

  it("returns false for a single opening bracket", () => {
    assertIsValid("(", false);
  });

  it("returns false for a single closing bracket", () => {
    assertIsValid(")", false);
  });

  it("returns false when there are unmatched opening brackets", () => {
    assertIsValid("(((", false);
  });

  it("returns false when there are unmatched closing brackets", () => {
    assertIsValid(")))", false);
  });

  it("returns true for deeply nested valid brackets", () => {
    assertIsValid("(((())))", true);
  });

  it("returns true for mixed nested valid brackets", () => {
    assertIsValid("{[()]}", true);
  });

  it("returns false when bracket types are mismatched", () => {
    assertIsValid("(}", false);
  });

  it("returns true for a longer valid sequence", () => {
    assertIsValid("([{}])", true);
  });
});
