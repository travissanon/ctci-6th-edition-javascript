// 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// Running time: O(n)
// Running space: O(n)
const isUnique = (str) => {
  const cache = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!cache[char]) {
      cache[char] = true;
    } else {
      return false;
    }
  }

  return true;
};

/* TESTS */
console.log("---[isUnique]---");
console.log(isUnique("abcd"), "true");
console.log(isUnique("abccd"), "false");
console.log(isUnique("bhjjb"), "false");
console.log(isUnique("mdjq"), "true");

// Running time: O(n^2)
// Running space: O(1)?
const isUniqueButBad = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j] && j !== i) {
        return false;
      }
    }
  }

  return true;
};

/* TESTS */
console.log("---[isUniqueButBad]---");
console.log(isUniqueButBad("abcd"), "true");
console.log(isUniqueButBad("abccd"), "false");
console.log(isUniqueButBad("bhjjb"), "false");
console.log(isUniqueButBad("mdjq"), "true");
