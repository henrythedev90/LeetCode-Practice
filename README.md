# LeetCode-Practice

A personal JavaScript workspace for solving [LeetCode](https://leetcode.com/) problems and verifying solutions with Node's built-in test runner.

## What this repo is for

This repository is a practice environment — not a library or framework. Each problem has:

- A solution function in one of the source files below
- A matching test file in `TestSuits/` with expected inputs and outputs

Use it to implement problems yourself, run tests locally, and track progress over time.

## Requirements

- [Node.js](https://nodejs.org/) (v18+ recommended for `node:test`)

No extra dependencies — tests use Node's built-in `node:test` and `node:assert` modules.

## Running tests

Run all tests:

```bash
npm test
```

Run a single problem's tests:

```bash
node --test TestSuits/climbStair.test.js
```

## Project structure

| Path | Purpose |
|------|---------|
| `index.js` | Easy problems (e.g. Two Sum, Valid Anagram, Contains Duplicate, Max Profit) |
| `weekTwo.js` | Week-two problems (e.g. Climbing Stairs, Valid Parentheses, Reverse Linked List) |
| `mediumProblems.js` | Medium problems (e.g. Group Anagrams, Top K Frequent Elements) |
| `TestSuits/` | Test files for each problem |
| `twoSum.test.js` | Two Sum tests (root-level legacy file) |

## Problems included

| LeetCode # | Problem | Solution file | Test file |
|------------|---------|---------------|-----------|
| 1 | Two Sum | `index.js` | `twoSum.test.js` |
| 20 | Valid Parentheses | `weekTwo.js` | `TestSuits/isValid.test.js` |
| 49 | Group Anagrams | `mediumProblems.js` | `TestSuits/groupAnagrams.test.js` |
| 70 | Climbing Stairs | `weekTwo.js` | `TestSuits/climbStair.test.js` |
| 121 | Best Time to Buy and Sell Stock | `index.js` | `TestSuits/maxProfit.test.js` |
| 206 | Reverse Linked List | `weekTwo.js` | `TestSuits/reverseLink.test.js` |
| 217 | Contains Duplicate | `index.js` | `TestSuits/containsDuplicate.test.js` |
| 242 | Valid Anagram | `index.js` | `TestSuits/isAnagram.test.js` |
| 347 | Top K Frequent Elements | `mediumProblems.js` | `TestSuits/topKFrequent.test.js` |

## Workflow

1. Pick a problem and open its solution file.
2. Implement the function (stubs throw `Not implemented` until you solve it).
3. Run the matching test file to check your work.
4. Iterate until all tests pass.
