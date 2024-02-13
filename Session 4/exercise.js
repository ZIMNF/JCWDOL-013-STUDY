// 01 Create a function that can create a triangle pattern according to the height we provide like the following :
//
// 01
// 02 03
// 04 05 06
// 07 08 09 10
//
// ● Parameters : height → triangle height

const pattern = (height) => {
  let result = "";
  let count = 1;
  for (let i = 1; i <= height; i++) {
    for (let j = 0; j < i; j++) {
      // result += count < 10 ? `0${count} ` : `${count} `;
      // count++;
      if (count < 10) {
        result += `0${count} `;
        count++;
      } else {
        result += `${count} `;
        count++;
      }
    }
    result += "\n";
  }
  return console.log(result);
};

pattern(5);

// 02 Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz".
// ● Parameters : n → total looping
// ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

const fizzBuzz = (n) => {
  let result = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      result += "FizzBuzz ";
    } else if (i % 5 == 0) {
      result += "Buzz ";
    } else if (i % 3 == 0) {
      result += "Fizz ";
    } else {
      result += `${i} `;
    }
  }
  return console.log(result);
};

fizzBuzz(6);

// 03 Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))2
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”

// 04 Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

// 05 Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]
