const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { reverseLink, ListNode } = require("../weekTwo");

function arrayToList(values) {
  if (values.length === 0) return null;

  const head = new ListNode(values[0]);
  let current = head;

  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }

  return head;
}

function listToArray(head) {
  const values = [];

  while (head) {
    values.push(head.val);
    head = head.next;
  }

  return values;
}

function assertReverseLink(input, expected) {
  const result = reverseLink(arrayToList(input));
  const output = listToArray(result);

  assert.deepEqual(output, expected);
}

describe("reverseLink", () => {
  it("reverses the classic leetcode example", () => {
    assertReverseLink([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
  });

  it("reverses a two-node list", () => {
    assertReverseLink([1, 2], [2, 1]);
  });

  it("returns null for an empty list", () => {
    assertReverseLink([], []);
  });

  it("returns the same single-node list", () => {
    assertReverseLink([1], [1]);
  });

  it("reverses a three-node list", () => {
    assertReverseLink([1, 2, 3], [3, 2, 1]);
  });

  it("reverses a list with duplicate values", () => {
    assertReverseLink([1, 1, 2, 2], [2, 2, 1, 1]);
  });

  it("reverses a longer list", () => {
    assertReverseLink([10, 20, 30, 40, 50, 60], [60, 50, 40, 30, 20, 10]);
  });
});
