const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { isAnagram } = require("../index.js");

function assertIsAnagram(s, t, expected) {
  const result = isAnagram(s, t);

  assert.equal(typeof result, "boolean", "result should be a boolean");
  assert.equal(result, expected);
}

describe("isAnagram", () => {
  it("returns true for a classic anagram", () => {
    assertIsAnagram("anagram", "nagaram", true);
  });

  it("returns false when strings are not anagrams", () => {
    assertIsAnagram("rat", "car", false);
  });

  it("returns true for two empty strings", () => {
    assertIsAnagram("", "", true);
  });

  it("returns true for a single matching character", () => {
    assertIsAnagram("a", "a", true);
  });

  it("returns false for a single different character", () => {
    assertIsAnagram("a", "b", false);
  });

  it("returns false when lengths differ", () => {
    assertIsAnagram("ab", "a", false);
  });

  it("returns false when lengths differ with longer second string", () => {
    assertIsAnagram("a", "ab", false);
  });

  it("returns true when strings are identical", () => {
    assertIsAnagram("listen", "listen", true);
  });

  it("returns true for another valid anagram pair", () => {
    assertIsAnagram("listen", "silent", true);
  });

  it("returns false when letter counts do not match", () => {
    assertIsAnagram("aab", "abb", false);
  });

  it("returns false when same letters appear with wrong frequency", () => {
    assertIsAnagram("aacc", "ccac", false);
  });

  it("returns true when letters are rearranged with duplicates", () => {
    assertIsAnagram("aabb", "bbaa", true);
  });

  it("returns false when one extra letter is present", () => {
    assertIsAnagram("abc", "abcd", false);
  });
});
