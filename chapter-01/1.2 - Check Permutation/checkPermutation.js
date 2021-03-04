// This one is easier to read

const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const perm1 = str1.split("").sort().join("");
  const perm2 = str2.split("").sort().join("");

  return perm1 === perm2;
};

/*
// This one is faster (I think...)

const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) { return false }
  
  const cache = {};

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    const charInCache = cache.hasOwnProperty(char);
    
    cache[char] = !charInCache ? 1 : cache[char] + 1
  }
  
  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    const charInCache = cache.hasOwnProperty(char);
 
    if (charInCache) {
      if (cache[char] >= 1) {
        cache[char] -= 1
      } else if (charInCache && cache[char] === 0) {
        return false
      }
    } else {
      return false
    }
  }
  
  return true
} 
*/

// Tests
console.log(checkPermutation("aba", "aab"), true);
console.log(checkPermutation("aba", "aaba"), false);
console.log(checkPermutation("aba", "aa"), false);
