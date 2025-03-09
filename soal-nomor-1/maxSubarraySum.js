// 2. Fungsi untuk menemukan jumlah maksimum subarray dengan panjang tertentu (O(n))
function maxSubarraySum(arr, len) {
  // Jika panjang array kurang dari panjang subarray yang diminta, return null
  if (arr.length < len) {
    return null;
  }

  // Hitung jumlah awal untuk subarray pertama
  let maxSum = 0;
  for (let i = 0; i < len; i++) {
    maxSum += arr[i];
  }

  // Inisialisasi currentSum dengan nilai maxSum
  let currentSum = maxSum;

  // Gunakan teknik sliding window untuk menghitung subarray berikutnya
  for (let i = len; i < arr.length; i++) {
    // Kurangi elemen pertama dari window sebelumnya, tambahkan elemen baru
    currentSum = currentSum - arr[i - len] + arr[i];

    // Update maxSum jika currentSum lebih besar
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}

// Unit Testing untuk fungsi maxSubarraySum
function testMaxSubarraySum() {
  console.log("========= Testing maxSubarraySum =========");

  // Test case 1
  const input1 = [100, 200, 300, 400];
  const length1 = 2;
  const expected1 = 700;
  const result1 = maxSubarraySum(input1, length1);
  console.log("Test 1:", result1 === expected1 ? "PASS" : "FAIL");
  console.log("Input:", input1, "Length:", length1);
  console.log("Output:", result1);
  console.log("Expected:", expected1);

  // Test case 2
  const input2 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
  const length2 = 4;
  const expected2 = 39;
  const result2 = maxSubarraySum(input2, length2);
  console.log("Test 2:", result2 === expected2 ? "PASS" : "FAIL");
  console.log("Input:", input2, "Length:", length2);
  console.log("Output:", result2);
  console.log("Expected:", expected2);

  // Test case 3
  const input3 = [-3, 4, 0, -2, 6, -1];
  const length3 = 2;
  const expected3 = 5;
  const result3 = maxSubarraySum(input3, length3);
  console.log("Test 3:", result3 === expected3 ? "PASS" : "FAIL");
  console.log("Input:", input3, "Length:", length3);
  console.log("Output:", result3);
  console.log("Expected:", expected3);

  // Test case 4: Array kosong
  const input4 = [];
  const length4 = 2;
  const expected4 = null;
  const result4 = maxSubarraySum(input4, length4);
  console.log("Test 4:", result4 === expected4 ? "PASS" : "FAIL");
  console.log("Input:", input4, "Length:", length4);
  console.log("Output:", result4);
  console.log("Expected:", expected4);

  // Test case 5: Length lebih besar dari panjang array
  const input5 = [1, 2, 3];
  const length5 = 4;
  const expected5 = null;
  const result5 = maxSubarraySum(input5, length5);
  console.log("Test 5:", result5 === expected5 ? "PASS" : "FAIL");
  console.log("Input:", input5, "Length:", length5);
  console.log("Output:", result5);
  console.log("Expected:", expected5);
}

// Jalankan unit testing
testMaxSubarraySum();
