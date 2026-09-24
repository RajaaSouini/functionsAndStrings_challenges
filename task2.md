# Recursive Functions — Challenge Bank


---

## Challenge 1 — Factorial Calculator

**Context:** A probability app needs to compute factorials (`5! = 5 × 4 × 3 × 2 × 1`) to calculate how many ways a set of items can be arranged.

**Task:** Write `factorial(n)` recursively. Base case: `factorial(0)` and `factorial(1)` are both `1`.

**Example:**
```javascript
console.log(factorial(5));
console.log(factorial(0));
```
**Output:**
```
120
1
```

---

## Challenge 2 — Digit Sum

**Context:** A "digital root" toy on a math-puzzle site needs to add up all the digits of a number.

**Task:** Write `sumDigits(n)` recursively — no converting the number to a string or array. Base case: a single-digit number (less than 10) returns itself. Recursive case: take the last digit (`n % 10`) and add it to the sum of the digits of what's left (`Math.floor(n / 10)`).

**Example:**
```javascript
console.log(sumDigits(4927));
console.log(sumDigits(7));
```
**Output:**
```
22
7
```

---

## Challenge 3 — Power Calculator

**Context:** A scientific calculator needs `base ^ exponent`, without using `**` or `Math.pow`.

**Task:** Write `power(base, exponent)` recursively (assume `exponent` is a non-negative whole number). Base case: any `base` to the power `0` is `1`.

**Example:**
```javascript
console.log(power(2, 10));
console.log(power(5, 0));
```
**Output:**
```
1024
1
```

---

## Challenge 4 — Fibonacci Term

**Context:** A nature app explains the Fibonacci sequence (seen in flower petals and pinecones) by computing its terms: `0, 1, 1, 2, 3, 5, 8, 13, ...`, where each term is the sum of the two before it.

**Task:** Write `fibonacci(n)` recursively, returning the `n`th term (0-indexed). Base cases: `fibonacci(0)` is `0`, `fibonacci(1)` is `1`.

**Example:**
```javascript
console.log(fibonacci(9));
console.log(fibonacci(0));
console.log(fibonacci(1));
```
**Output:**
```
34
0
1
```

**Why this one is tricky:** this is the first challenge with **two** recursive calls in one step (`fibonacci(n - 1) + fibonacci(n - 2)`) instead of one — trace it on paper for `fibonacci(4)` before trusting the code, the call tree branches fast.

---

## Challenge 5 — Recursive String Reverse

**Context:** You already built a manual string reverse with a loop on Day 8 — now rebuild it the recursive way, to see the same result reached completely differently.

**Task:** Write `reverseString(str)` recursively, with no loop. Base case: a string of length 0 or 1 is its own reverse.

**Example:**
```javascript
console.log(reverseString("bootcamp"));
console.log(reverseString("a"));
```
**Output:**
```
pmactoob
a
```

**Hint:** the recursive case is `reverseString(str.slice(1)) + str[0]` — reverse everything after the first character, then put the first character at the end.

---

## Challenge 6 — Recursive Array Sum

**Context:** Same idea as Challenge 5, applied to the array-summing function you've written before with a loop — rebuild it recursively.

**Task:** Write `sumArray(arr, index)` recursively, where `index` tracks which item to add next (default it to `0` if not passed in). Base case: once `index` reaches `arr.length`, there's nothing left to add, so return `0`.

**Example:**
```javascript
console.log(sumArray([4, 8, 15, 16, 23]));
console.log(sumArray([]));
```
**Output:**
```
66
0
```

---

## Challenge 7 — Recursive Count Occurrences

**Context:** A quiz app tallies how many times a specific answer choice was picked across all submissions, stored in an array.

**Task:** Write `countOccurrences(arr, target, index)` recursively (same `index` pattern as Challenge 6) that counts how many times `target` appears in `arr`.

**Example:**
```javascript
console.log(countOccurrences([1, 3, 3, 5, 3, 2], 3));
console.log(countOccurrences(["a", "b", "a"], "z"));
```
**Output:**
```
3
0
```

---

## Challenge 8 — Recursive Palindrome Check

**Context:** Combine Challenge 5's idea with a fresh problem: checking whether a word reads the same forwards and backwards, without ever reversing the whole string.

**Task:** Write `isPalindrome(str)` recursively. Base case: a string of length 0 or 1 is always a palindrome. Recursive case: check whether the first and last characters match — if they don't, it's immediately `false`; if they do, recurse on the string with both ends removed.

**Example:**
```javascript
console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
console.log(isPalindrome(""));
```
**Output:**
```
true
false
true
```

---

## Challenge 9 — Flatten a Nested Array — *hard*

**Context:** A form library collects answers into arrays that sometimes contain other arrays inside them (grouped checkboxes, for instance), and needs one single flat list of every answer.

**Task:** Write `flatten(arr)` that returns a new array with every value from `arr`, but with any nested arrays "unwrapped" — regardless of how deeply they're nested. Use `Array.isArray(value)` to detect when an item is itself an array, and recurse into it.

**Example:**
```javascript
console.log(flatten([1, [2, 3], [4, [5, 6]], 7]));
console.log(flatten([1, 2, 3]));
```
**Output:**
```
[ 1, 2, 3, 4, 5, 6, 7 ]
[ 1, 2, 3 ]
```

**Why this one is hard:** the nesting depth isn't fixed — `[4, [5, 6]]` has an array inside an array inside the outer array. A loop alone can't handle arbitrary depth; recursion can, because `flatten` calling itself on a nested array handles "one more level deep" the exact same way no matter how many levels there are.

---

## Challenge 10 — Recursive Binary Search — *hard*

**Context:** You wrote binary search with a `while` loop earlier — binary search is actually a textbook example of recursion, since each step reduces to "do the exact same search, just on a smaller half of the array."

**Task:** Write `binarySearchRecursive(arr, target, low, high)` recursively, on a **sorted** array. Default `low` to `0` and `high` to `arr.length - 1` when not passed in. Base case: if `low > high`, the search window is empty — return `-1`.

**Example:**
```javascript
let sorted = [5, 7, 23, 32, 34, 62];
console.log(binarySearchRecursive(sorted, 34));
console.log(binarySearchRecursive(sorted, 100));
```
**Output:**
```
4
-1
```

**Why this one is hard:** instead of a `while` loop shrinking `low`/`high` on each pass, each recursive call *is* one pass — check the middle, then call `binarySearchRecursive` again on whichever half remains, with new `low`/`high` values. This is the clearest example in the bank of recursion directly replacing a loop you already know.