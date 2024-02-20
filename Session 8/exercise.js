// ● 01 Create a function to convert Excel sheet column title to its corresponding column number.

function titleToNumber(title) {
  let result = 0;
  for (let i = 0; i < title.length; i++) {
    result = result * 26 + title.charCodeAt(i) - "A".charCodeAt(0) + 1;
  }
  return result;
}

// Example usage:
console.log(titleToNumber("A"));
console.log(titleToNumber("B"));
console.log(titleToNumber("Z"));
console.log(titleToNumber("AA"));
console.log(titleToNumber("AB"));

// 02 Given a non-empty array of integers nums, every element appears twice except for one. Find that
// single one.

// function singleNumber(nums) {
//   let result = 0;

//   // Use XOR operation to cancel out duplicate elements
//   // XOR of a number with itself is 0
//   // XOR of a number with 0 is the number itself
//   for (let num of nums) {
//     // ini  ga ngerti
//     result ^= num;
//   }

//   return result;
// }

// // Example usage:
// // const nums = [2, 2, 1, 1, 3];
// // console.log("Single number:", singleNumber(nums));

// 02 Given a non-empty array of integers nums, every element appears twice except for one. Find that
// single one.

function singleNumber(nums) {
  let count = {};

  // Hitung berapa kali setiap angka muncul
  for (let num of nums) {
    if (count[num] === undefined) {
      count[num] = 1;
    } else {
      count[num]++;
    }
  }

  // Cari elemen yang hanya muncul satu kali
  for (let num in count) {
    if (count[num] === 1) {
      return parseInt(num);
    }
  }
}

// Contoh penggunaan:
let nums = [2, 2, 1, 1, 3];
console.log(singleNumber(nums));

// 03 Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// ● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

function isAnagram(s, t) {
  // Sort both strings
  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");

  // Compare the sorted strings
  return sortedS === sortedT;
}

// Example usage:
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

// 04 You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2
// steps. In how many distinct ways can you climb to the top?
// function climbStairs(n) {
//   if (n === 1) {
//     return 1;
//   }

//   let dp = new Array(n + 1);
//   dp[1] = 1;
//   dp[2] = 2;

//   for (let i = 3; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }

//   return dp[n];
// }

// // Example usage:
// console.log(climbStairs(2));

/////////////////////
function climbStairs(n) {
  if (n === 1) return 1;

  if (n == 1 || n == 2) {
    return n;
  }

  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
}

// Example usage:
console.log(climbStairs(2));
////////////////////////////

// function climbStairs(n) {
//   if (n === 1) {
//     return 1;
//   }

//   let first = 1;
//   let second = 2;

//   for (let i = 3; i <= n; i++) {
//     let third = first + second;
//     first = second;
//     second = third;
//   }

//   return second;
// }

// // Example usage:
// console.log(climbStairs(2));
// console.log(climbStairs(3));
