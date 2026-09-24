# Day 8 Challenge Bank — Strings



---

## Challenge 1 — Username Generator

**Context:** A sign-up form needs to auto-generate a username from a new user's first and last name, in the format `firstname.lastname`, all lowercase.

**Task:** Write `generateUsername(firstName, lastName)` that returns the formatted username using a template literal.

**Example:**
```javascript
console.log(generateUsername("Yassine", "Bahajou"));
```
**Output:**
```
yassine.bahajou
```

---

## Challenge 2 — Initials Extractor

**Context:** A messaging app shows a colored circle with a user's initials when they have no profile picture.

**Task:** Write `getInitials(fullName)` that takes a full name (any number of words) and returns the uppercase first letter of each word, with no spaces or separators.

**Example:**
```javascript
console.log(getInitials("Yassine Bahajou"));
console.log(getInitials("Sara Amine El Idrissi"));
```
**Output:**
```
YB
SAEI
```

---

## Challenge 3 — Email Domain Finder

**Context:** A support tool needs to group customer tickets by email provider (gmail, outlook, etc.).

**Task:** Write `getDomain(email)` that returns everything after the `@` symbol.

**Example:**
```javascript
console.log(getDomain("yassine.bahajou@gmail.com"));
```
**Output:**
```
gmail.com
```

---

## Challenge 4 — Vowel Counter

**Context:** A typing-practice app scores how "vowel-heavy" a phrase is, for a fun statistics screen.

**Task:** Write `countVowels(str)` that counts how many characters in `str` are vowels (`a, e, i, o, u`, upper or lower case).

**Example:**
```javascript
console.log(countVowels("JavaScript Bootcamp"));
```
**Output:**
```
6
```

---

## Challenge 5 — Word Counter

**Context:** A blogging platform shows a live word count under the post editor as the writer types.

**Task:** Write `countWords(sentence)` that returns the number of words in a sentence, assuming words are separated by single spaces.

**Example:**
```javascript
console.log(countWords("Learning JavaScript is fun and rewarding"));
```
**Output:**
```
6
```

---

## Challenge 6 — Character Frequency Counter

**Context:** A word game needs to know how many times a specific letter appears in a word, to validate a player's guess.

**Task:** Write `countCharacter(str, target)` that counts how many times the single character `target` appears in `str`.

**Example:**
```javascript
console.log(countCharacter("mississippi", "s"));
```
**Output:**
```
4
```

---

## Challenge 7 — Longest Word Finder

**Context:** A headline generator wants to detect the longest word in a sentence, to make sure it doesn't overflow a narrow banner.

**Task:** Write `longestWord(sentence)` that returns the longest word in the sentence. If there's a tie, return whichever comes first.

**Example:**
```javascript
console.log(longestWord("The quick brown fox jumps over a lazy dog"));
```
**Output:**
```
quick
```

---

## Challenge 8 — Palindrome Checker

**Context:** A word-puzzle app wants to detect palindromes — phrases that read the same forwards and backwards, ignoring spaces and case.

**Task:** Write `isPalindrome(str)` that returns `true` or `false`. Reuse a manual `reverseString` helper (from today's veille) and a helper that strips spaces — no shortcuts.

**Example:**
```javascript
console.log(isPalindrome("radar"));
console.log(isPalindrome("was it a car or a cat i saw"));
console.log(isPalindrome("hello"));
```
**Output:**
```
true
true
false
```

---

## Challenge 9 — Count Keyword Occurrences

**Context:** A simple SEO tool counts how many times a keyword appears in an article, to flag "keyword stuffing".

**Task:** Write `countOccurrences(text, keyword)` that counts how many times `keyword` appears in `text`, including overlapping or repeated matches. Use `slice` inside a loop to compare a moving window against `keyword` — no `indexOf`-in-a-loop shortcuts.

**Example:**
```javascript
console.log(countOccurrences("the cat sat on the mat with the hat", "the"));
```
**Output:**
```
3
```

---

## Challenge 10 — Normalize Whitespace

**Context:** A search box needs to clean up messy user input — extra spaces from copy-pasting — before running a search.

**Task:** Write `normalizeSpaces(str)` that removes leading/trailing whitespace and collapses any run of multiple spaces between words down to exactly one space. Build the result manually — no `.join()`.

**Example:**
```javascript
console.log("[" + normalizeSpaces("  Hello    World   from   YouCode  ") + "]");
```
**Output:**
```
[Hello World from YouCode]
```

---

## Challenge 11 — Title Case Converter

**Context:** A blog CMS auto-formats post titles so every word starts with a capital letter, no matter how the writer typed it.

**Task:** Write `toTitleCase(sentence)` that capitalizes the first letter of every word in a sentence and lowercases nothing else (assume the rest of each word is already fine).

**Example:**
```javascript
console.log(toTitleCase("javascript bootcamp at youcode sas"));
```
**Output:**
```
Javascript Bootcamp At Youcode Sas
```

---

## Challenge 12 — Anagram Checker

**Context:** A word game wants to verify whether two phrases use exactly the same letters, just rearranged — a classic anagram check.

**Task:** Write `isAnagram(str1, str2)` that returns `true` if the two strings (ignoring spaces and case) contain exactly the same characters the same number of times, `false` otherwise. Build a character-frequency object for each string (like Day 7's accumulator pattern), then compare them.

**Example:**
```javascript
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("the eyes", "they see"));
console.log(isAnagram("hello", "world"));
```
**Output:**
```
true
true
false
```

---

## Challenge 13 — Caesar Cipher Shift

**Context:** A simple encoding tool shifts every letter of a lowercase message forward by one position in the alphabet — `a` becomes `b`, `z` wraps back around to `a`.

**Task:** Write `caesarShift(str)` that shifts every letter in `str` forward by one, leaving non-letters (like spaces) unchanged. Use a string `"abcdefghijklmnopqrstuvwxyz"` as a lookup alphabet with `indexOf` and bracket access — no character-code methods.

**Example:**
```javascript
console.log(caesarShift("hello world"));
console.log(caesarShift("youcode"));
```
**Output:**
```
ifmmp xpsme
zpvdpef
```

---

## Challenge 14 — Reverse Word Order

**Context:** A quirky text-effect feature flips the order of words in a sentence (not the letters within each word) for a "backwards talk" filter.

**Task:** Write `reverseWordOrder(sentence)` that returns the sentence with its words in reverse order, each word itself unchanged.

**Example:**
```javascript
console.log(reverseWordOrder("JavaScript is fun to learn"));
```
**Output:**
```
learn to fun is JavaScript
```

---

## Challenge 15 — Student Report Generator

**Context:** A small school app needs a one-line report per student, combining their name, computed average, and a letter grade — pulling together objects, arrays, functions, and strings all at once.

**Task:** Write `buildReport(student)`, where `student` is an object like `{ name: "imane", scores: [14, 18, 16] }`. Compute the average of `scores`, determine a grade (`Excellent` ≥ 16, `Good` ≥ 12, `Pass` ≥ 10, else `Fail`), and return a single formatted string using a template literal, with the name in uppercase.

**Example:**
```javascript
console.log(buildReport({ name: "imane", scores: [14, 18, 16] }));
console.log(buildReport({ name: "karim", scores: [6, 9, 9] }));
```
**Output:**
```
IMANE — Average: 16 — Grade: Excellent
KARIM — Average: 8 — Grade: Fail
```