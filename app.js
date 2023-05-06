// What does the following code return?
new Set([1, 1, 2, 2, 3, 4]) // returns an array of [1, 2, 3, 4]

// What does the following code return?
[...new Set("referee")].join(""); // returns the string 'ref'

// What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false); // [ 1, 2, 3 ]: true [ 1, 2, 3 ]: false

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
const hasDuplicate = (arr) => {
  const newArr = new Set([...arr]);
  if (newArr.size < arr.length) {
    return true;
  }
  return false;
};

hasDuplicate([1, 3, 2, 1]); // true
hasDuplicate([1, 5, -1, 4]); // false

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
function vowelCount(str) {
  const vowels = "aeiou";
  const vowelMap = new Map();
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      if (vowelMap.has(char)) {
        vowelMap.set(char, vowelMap.get(char) + 1);
      } else {
        vowelMap.set(char, 1);
      }
    }
  }
  return vowelMap;
}

console.log(vowelCount('awesome')); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount('Colt')); // Map { 'o' => 1 }
