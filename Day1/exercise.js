// No 1
// Mencari luas persegi panajang = p x l
const p = 5;
const l = 3;
const luas = p * l;
let hasil = `Hasil Luas = ${luas}`;
console.log(hasil);

// No 2
// Mencari keliling persegi panjang 2 * (p + l)

const keliling = 2 * (p + l);
hasil = `Hasil Keliling = ${keliling}`;
console.log(hasil);

// No 3
// Mencari diameter d = 2 x r
const r = 5;
const diameter = 2 * r;
hasil = `Hasil diameter = ${diameter}`;
console.log(hasil);

// Mencari keliling k = 2 * pi * r
const pi = Math.PI;
const kelilingLingkaran = 2 * pi * r;
hasil = `Hasil keliling lingkaran = ${kelilingLingkaran}`;
console.log(hasil);

// Mencari Luas lingkaran L = pi * r * r

const luasLingkaran = pi * r * r;
hasil = `Hasil luas lingkaran = ${luasLingkaran}`;
console.log(hasil);

// No 4
// Mencari sudut suatu segitiga s = a+b+c (180)
const a = 80;
const b = 65;
const totalSudut = 180;
const sudut = totalSudut - a - b;
hasil = `Hasil sudut = ${sudut}`;
console.log(hasil);

// No 5
// Mendapatkan perbedan tanggal

let date1 = new Date("2022-01-20");
console.log(date1);
let date2 = new Date("2022-01-22");
console.log(date2);

const perbedaanTanggal = (date2 - date1) / (1000 * 3600 * 24);
console.log(perbedaanTanggal);

// No 6
// mengubah hari menjadi tahun, bulan, dan hari
let days = 400;

const tahun = days / 365;
const bulan = (days % 365) / 30;
const hari = (days % 365) % 30;
console.log(`${tahun.toFixed()} tahun ${bulan.toFixed()} bulan ${hari} hari`);
