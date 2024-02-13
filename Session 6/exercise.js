// ● 01 Create a function to calculate array of student data
// ● The object has this following properties :
// ○ Name → String
// ○ Email → String
// ○ Age → Date
// ○ Score → Number
// ● Parameters : array of student
// ● Return values :
// ○ Object with this following properties :
// ■ Score
// ● Highest
// ● Lowest
// ● Average
// ■ Age
// ● Highest
// ● Lowest
// ● Average

let student = [
  {
    name: "Anto",
    email: "anto@gmail.com",
    age: new Date(2000, 9, 11),
    score: 95,
  },
  {
    name: "Budi",
    email: "budi@gmail.com",
    age: new Date(2002, 9, 11),
    score: 100,
  },
  {
    name: "coki",
    email: "coki@gmail.com",
    age: new Date(2005, 9, 11),
    score: 75,
  },
];

const calculateArray = (arr) => {
  let scoreValue = [];
  let ageValue = [];
  let totalScore = 0;
  let totalAge = 0;

  // for putting values inside other variables
  for (let i = 0; i < arr.length; i++) {
    scoreValue.push(arr[i].score);
    ageValue.push(new Date().getFullYear() - new Date(student[i].age).getFullYear());
  }

  // for sorting Score value
  for (let i = 0; i < scoreValue.length; i++) {
    for (let j = 0; j < scoreValue.length - i - 1; j++) {
      if (scoreValue[j] > scoreValue[j + 1]) {
        let temp = scoreValue[j + 1];
        scoreValue[j + 1] = scoreValue[j];
        scoreValue[j] = temp;
      }
    }
  }

  //  for sorting Age value
  for (let i = 0; i < ageValue.length; i++) {
    for (let j = 0; j < ageValue.length - i - 1; j++) {
      if (ageValue[j] > ageValue[j + 1]) {
        let temp = ageValue[j + 1];
        ageValue[j + 1] = ageValue[j];
        ageValue[j] = temp;
      }
    }
  }

  // for summing age value
  for (let i = 0; i < ageValue.length; i++) {
    totalAge += ageValue[i];
  }

  // for summing score value
  for (let i = 0; i < scoreValue.length; i++) {
    totalScore += scoreValue[i];
  }

  let scoreData = {
    Highest: scoreValue[scoreValue.length - 1],
    Lowest: scoreValue[0],
    Average: totalScore / scoreValue.length,
  };

  let ageData = {
    Highest: ageValue[ageValue.length - 1],
    Lowest: ageValue[0],
    Average: totalAge / ageValue.length,
  };

  return {
    Score: scoreData,
    Age: ageData,
  };
};

console.log(calculateArray(student));

// Exercise 2

// ● Create a program to create transaction
// ● Product Class
// ○ Properties
// ■ Name
// ■ Price
// ● Transaction Class
// ○ Properties
// ■ Total
// ■ Product
// ● All product data
// ● Qty

// ○ Add to cart method → Add product to transaction
// ○ Show total method → Show total current transaction
// ○ Checkout method → Finalize transaction, return transaction data
