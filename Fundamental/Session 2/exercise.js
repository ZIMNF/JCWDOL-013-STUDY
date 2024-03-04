// EXERCISE 02
// 01 convert celcius to fahrenheit
// hint
/*
 buat const cel
 buat let fah
 cari rumus celsius ke fahrenheit
*/

// solution
/*
rumus °F = (9/5 x °C) + 32
*/

const cel = 60;
let fah;

fah = (9 / 5) * cel + 32;
console.log(`hasil conversi dari ${cel} celsius adalah ${fah} fahrenheit`);

// 02 cek angka ganjil atau genap
// hint
// buat varibel cek
// solution
// berpapun angka modulus 2 hasilnya 0 maka genap, 1 maka ganjil

let cek = 25;

if (cek % 2 == 0) {
  console.log(`${cek} adalah genap`);
} else {
  console.log(`${cek} adalah ganjil`);
}

// 03 mencari bilangan prima
// hint
// buat variabel yg di butuhkan
// cari rumus mencari bilangan prima
let number = 2;
let message = "";
let bilanganPrima = true;

message = `${number} bilangan prima`;

if (number === 1) message = `input number selain angka 1`;

for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    bilanganPrima = false;
    message = `${number} bukan bilangan prima`;
    break;
  }
}
console.log(message);

// 04 mencar jumlah bilangan 1 sampai N
number = 5;
let penjumlahan = 0;
message = `${number} => `;
for (i = 1; i <= number; i++) {
  penjumlahan += i;
  message += i == number ? `${i} = ${penjumlahan}` : `${i} + `; // cara jadin if biasa gimana?
}
console.log(message);

// 05 mencari faktorial suatu bilangan
number = 4;
message = `factorial dari ${number} = `;
for (let i = number - 1; i >= 1; i--) {
  number *= i;
}
message += `${number}`;
console.log(message);

// 06 mencetak Nilai bilangan fibonaci pertama

const n = 15;
{
  let fibArray = [0, 1];

  for (let i = 2; i <= n; i++) {
    // Calculate the next Fibonacci number by adding the last two numbers
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }

  // Print the Fibonacci numbers
  console.log(`First ${n} Fibonacci numbers: ${fibArray}`);
}
