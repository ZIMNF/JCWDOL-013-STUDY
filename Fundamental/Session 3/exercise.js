// 01 Tulis kode untuk menampilkan tabel perkalian bilangan bulat tertentu
let message;
cariPB(2);

function cariPB(number) {
  // Iterate from 1 to 10 to display multiplication table
  for (let i = 1; i <= 10; i++) {
    // Calculate the product
    let product = number * i;
    // Display the multiplication table
    console.log(`${number} x ${i} = ${product}`);
  }
}

// 02 Tulis kode untuk memeriksa apakah suatu string termasuk palindrom atau bukan.

let cek = "nahan";
let result = `${cek} -> palindrome`;
for (let i = 0; i < cek.length / 2; i++) {
  if (cek[i] !== cek[cek.length - 1 - i]) {
    result = `${cek} -> not palindrome`;
  }
}

console.log(result);

// 03 Write a code to convert centimeter to kilometer.
// Example : 100000 → “1 km”
let cm = 100000;
let konversiCmToKm = cm / 100000;
result = `${cm} cm -> ${konversiCmToKm} km`;
console.log(result);

// 04 Write a code to format number as currency (IDR)
// Example : 1000 → “Rp. 1.000,00”
let n = 1000;
result = n.toLocaleString("in-ID", { style: "currency", currency: "IDR" });
console.log(result);

// 05 Write a code to remove the first occurrence of a given “search string” from a string
// Example : string = “Hello world”, search string = “ell” → “Ho world”

cek = "Hello World";
let searchCek = "";
let replace = `${cek.replace(searchCek, "")}`;
result = `string = ${cek}, search string = ${searchCek} -> ${replace}`;
console.log(result);

// 06 Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World”
cek = "hello world";
let prop = cek.split(" ");

for (let i = 0; i < prop.length; i++) {
  prop[i] = prop[i][0].toUpperCase() + prop[i].substring(1);
}

result = `"${cek}" -> "${prop.join(" ")}"`;

console.log(result);

// 07 Write a code to reverse a string.
// ○ Example : “hello” → “olleh”
cek = "hello";
let rev = "";
for (let i = cek.length - 1; i >= 0; i--) {
  rev += cek[i];
}

console.log(`${cek} -> ${rev}`);

// 08 Write a code to swap the case of each character from string
// ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’

let before = "The QuiCk BrOwN Fox";
let after = "";

for (let i = 0; i < before.length; i++) {
  if (before[i] == before[i].toLowerCase()) {
    after += before[i].toUpperCase();
  } else {
    after += before[i].toLowerCase();
  }
}
result = `"${before}" -> "${after}"`;

console.log(result);

// 09 Write a code to find the largest of two given integers
// ○ Example : num1 = 42, num2 = 27 → 42

let num1 = 42;
let num2 = 27;

if (num1 < num2) {
  console.log(num2);
} else {
  console.log(num1);
}

// 10 Write a conditional statement to sort three numbers
// ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42

num1 = 42;
num2 = 27;
let num3 = 18;
let arrNum = [num1, num2, num3];

for (let i = 0; i <= arrNum.length - 1; i++) {
  for (let j = 0; j <= arrNum.length - i - 1; j++) {
    if (arrNum[j] > arrNum[j + 1]) {
      let cek = arrNum[j + 1];
      arrNum[j + 1] = arrNum[j];
      arrNum[j] = cek;
    }
  }
}
console.log(arrNum);

// 11 Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
// ○ Example : “hello” → 1

// 12 Write a code to change every letter a into * from a string of input
// ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
