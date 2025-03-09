// 1. Fungsi untuk mengurutkan angka dari terbesar ke terkecil (O(n))
function sortDescending(arr) {
  // Counting sort - efisien untuk array dengan range nilai yang diketahui
  // Cari nilai maksimum dalam array
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Buat array penghitung dengan indeks 0 hingga max
  const count = new Array(max + 1).fill(0);

  // Hitung frekuensi setiap angka
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Buat array hasil
  const result = [];

  // Tambahkan angka-angka ke array hasil sesuai frekuensi, dari besar ke kecil
  for (let i = max; i >= 0; i--) {
    for (let j = 0; j < count[i]; j++) {
      result.push(i);
    }
  }

  return result;
}

// Unit Testing untuk fungsi sortDescending
function testSortDescending() {
  console.log("========= Testing sortDescending =========");

  // Test case 1: Array dengan angka berulang
  const input1 = [1, 2, 4, 3, 5, 3, 2, 1];
  const expected1 = [5, 4, 3, 3, 2, 2, 1, 1];
  const result1 = sortDescending(input1);
  console.log(
    "Test 1:",
    JSON.stringify(result1) === JSON.stringify(expected1) ? "PASS" : "FAIL"
  );
  console.log("Input:", input1);
  console.log("Output:", result1);
  console.log("Expected:", expected1);

  // Test case 2: Array dengan satu angka
  const input2 = [7];
  const expected2 = [7];
  const result2 = sortDescending(input2);
  console.log(
    "Test 2:",
    JSON.stringify(result2) === JSON.stringify(expected2) ? "PASS" : "FAIL"
  );
  console.log("Input:", input2);
  console.log("Output:", result2);
  console.log("Expected:", expected2);

  // Test case 3: Array sudah terurut
  const input3 = [5, 4, 3, 2, 1];
  const expected3 = [5, 4, 3, 2, 1];
  const result3 = sortDescending(input3);
  console.log(
    "Test 3:",
    JSON.stringify(result3) === JSON.stringify(expected3) ? "PASS" : "FAIL"
  );
  console.log("Input:", input3);
  console.log("Output:", result3);
  console.log("Expected:", expected3);

  // Test case 4: Array kosong
  const input4 = [];
  const expected4 = [];
  const result4 = sortDescending(input4);
  console.log(
    "Test 4:",
    JSON.stringify(result4) === JSON.stringify(expected4) ? "PASS" : "FAIL"
  );
  console.log("Input:", input4);
  console.log("Output:", result4);
  console.log("Expected:", expected4);
}

// Jalankan unit testing
testSortDescending();
