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
console.log(isUnique("abcd"), "true");
console.log(isUnique("abccd"), "false");
console.log(isUnique("bhjjb"), "false");
console.log(isUnique("mdjq"), "true");
