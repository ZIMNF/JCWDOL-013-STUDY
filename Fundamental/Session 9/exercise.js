// NO 1
/*


Given an array nums of size n, return the majority element. The majority element is the element that
appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


*/

function majorityElement(nums) {
    const counts = {}; // Objek untuk menghitung berapa kali setiap elemen muncul
  
    // Hitung berapa kali setiap elemen muncul dalam array
    for (let num of nums) {
      counts[num] = (counts[num] || 0) + 1;
    }
  
    // Cari elemen yang muncul lebih dari setengah dari panjang array
    for (let num in counts) {
      if (counts[num] > nums.length / 2) {
        return parseInt(num); // Ubah kembali ke tipe bilangan bulat
      }
    }
  }
  
  const nums = [3, 2, 3];
  console.log("Elemen kandidat mayoritas:", majorityElement(nums));
  
  // No 2
  /*
  
  Create a function to convert roman numeral to integer.
  
  */
  
  // function romanToInt(s) {
  //   const romanNumerals = {
  //     I: 1,
  //     V: 5,
  //     X: 10,
  //     L: 50,
  //     C: 100,
  //     D: 500,
  //     M: 1000,
  //   };
  
  //   result = 0;
  
  //   // Iterasi melalui setiap karakter dalam string Romawi
  //   for (let i = 0; i < s.length; i++) {
  //     const currentChar = s[i];
  //     const currentValue = romanNumerals[currentChar];
  //     const nextValue = romanNumerals[s[i + 1]]; // Nilai karakter berikutnya (jika ada)
  
  //     // Jika nilai karakter berikutnya lebih besar, maka nilai saat ini harus dikurangi
  //     if (nextValue && nextValue > currentValue) {
  //       result -= currentValue;
  //     } else {
  //       result += currentValue;
  //     }
  //   }
  
  //   return result;
  // }
  
  // const romanNumeral = "LVIII";
  // console.log(`Angka bulat dari ${romanNumeral} adalah: ${romanToInt(romanNumeral)}`);
  
  // NO 3
  /*
  
  Given an integer numRows, return the first numRows of
  Pascal's triangle.
  
  */
  
  function pascalsTriangle(numRows) {
    const triangle = [];
  
    // Iterasi melalui setiap baris
    for (let i = 0; i < numRows; i++) {
      const row = []; // Inisialisasi array untuk baris saat ini
  
      // Setiap baris dimulai dan diakhiri dengan angka 1
      row.push(1);
  
      // Hitung angka dalam baris
      // Angka ke-i dihitung sebagai jumlah dari dua angka di atasnya pada baris sebelumnya
      for (let j = 1; j < i; j++) {
        row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
  
      // Jika bukan baris pertama, tambahkan angka 1 di akhir baris
      if (i > 0) {
        row.push(1);
      }
  
      // Tambahkan baris ke segitiga
      triangle.push(row);
    }
  
    return triangle;
  }
  
  const numRows = 5;
  console.log("Segitiga Pascal:", pascalsTriangle(numRows));
  
  // NO 4
  /*
  cari harga terendah
  eleminasi harga setelah pembelian atau terendah
  harga tertinggi di kurang harga terendah jika tidak ada tampilkan = 0
  
  */
  
  function maxProfit(prices) {
    let minPrice = Infinity; // Atur harga minimum ke nilai tak terhingga
    let maxProfit = 0; // Inisialisasi keuntungan maksimal ke 0
  
    // Iterasi melalui array harga
    for (let price of prices) {
      // Perbarui harga minimum yang ditemui sejauh ini
      minPrice = Math.min(minPrice, price);
      // Hitung keuntungan maksimal yang dapat dicapai
      maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit; // Kembalikan keuntungan maksimal
  }
  
  const prices = [7, 1, 5, 3, 6, 4];
  console.log("Keuntungan maksimal:", maxProfit(prices)); // Output: 5 (beli pada 1, jual pada 6)
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  
  function maxProfit(harga) {
    let minPrice = Infinity; // Set harga minimum ke nilai tak terhingga
    let maxProfit = 0; // Inisialisasi keuntungan maksimal ke 0
    let buyDay = 0; // Hari untuk membeli
    let sellDay = 0; // Hari untuk menjual
  
    // Iterasi melalui array harga
    for (let i = 0; i < harga.length; i++) {
      // Jika harga saat ini lebih rendah dari harga minimum yang ditemukan sejauh ini
      // Update harga minimum dan hari untuk membeli
      if (harga[i] < minPrice) {
        minPrice = harga[i];
        buyDay = i;
      }
  
      // Hitung potensi keuntungan dengan menjual di hari ini
      let potentialProfit = harga[i] - minPrice;
  
      // Jika potensi keuntungan lebih besar dari keuntungan maksimal yang ditemukan sejauh ini
      // Update keuntungan maksimal dan hari untuk menjual
      if (potentialProfit > maxProfit) {
        maxProfit = potentialProfit;
        sellDay = i;
      }
    }
  
    // Kembalikan keuntungan maksimal, hari untuk membeli, dan hari untuk menjual
    return {
      maxProfit: maxProfit,
      buyDay: buyDay,
      sellDay: sellDay,
    };
  }
  
  // Contoh penggunaan:
  const harga = [2, 8, 1, 3, 5];
  const result = maxProfit(harga);
  console.log("Keuntungan maksimal:", result.maxProfit);
  console.log("Beli pada hari ke:", result.buyDay);
  console.log("Jual pada hari ke:", result.sellDay);
  