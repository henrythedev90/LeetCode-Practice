const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { groupAnagrams } = require("../mediumProblems");

function normalizeGroups(groups) {
  return groups
    .map((group) => [...group].sort())
    .sort((a, b) => a.join("").localeCompare(b.join("")));
}

function assertGroupAnagrams(strs, expected) {
  const result = groupAnagrams(strs);

  assert.equal(Array.isArray(result), true, "result should be an array");
  assert.equal(
    result.every((group) => Array.isArray(group)),
    true,
    "each group should be an array of strings",
  );

  assert.deepEqual(normalizeGroups(result), normalizeGroups(expected));
}

describe("groupAnagrams", () => {
  it("groups the classic leetcode example", () => {
    assertGroupAnagrams(
      ["eat", "tea", "tan", "ate", "nat", "bat"],
      [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]],
    );
  });

  it("returns a single group for one empty string", () => {
    assertGroupAnagrams([""], [[""]]);
  });

  it("returns a single group for one word", () => {
    assertGroupAnagrams(["a"], [["a"]]);
  });

  it("returns an empty array for no input", () => {
    assertGroupAnagrams([], []);
  });

  it("puts words with no shared anagrams in separate groups", () => {
    assertGroupAnagrams(["abc", "def", "ghi"], [["abc"], ["def"], ["ghi"]]);
  });

  it("groups two words that are anagrams", () => {
    assertGroupAnagrams(["ab", "ba"], [["ab", "ba"]]);
  });

  it("groups duplicate identical strings together", () => {
    assertGroupAnagrams(["a", "a"], [["a", "a"]]);
  });

  it("handles multiple groups of different sizes", () => {
    assertGroupAnagrams(
      ["aab", "aba", "baa", "xyz", "zyx"],
      [
        ["aab", "aba", "baa"],
        ["xyz", "zyx"],
      ],
    );
  });

  it("groups words with repeated letters correctly", () => {
    assertGroupAnagrams(
      ["bdddddddddd", "bbbbbbbbbbc"],
      [["bdddddddddd"], ["bbbbbbbbbbc"]],
    );
  });

  it("handles a mix of short and long anagram groups", () => {
    assertGroupAnagrams(
      ["id", "di", "gen", "neg", "eng"],
      [
        ["id", "di"],
        ["gen", "neg", "eng"],
      ],
    );
  });
});
