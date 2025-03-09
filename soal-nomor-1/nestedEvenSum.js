// 3. Mendapatkan jumlah semua bilangan genap dalam nested object
function nestedEvenSum(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

// Unit Testing untuk fungsi nestedEvenSum
function testNestedEvenSum() {
  console.log("========= Testing nestedEvenSum =========");

  // Test case 1
  const input1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup",
      },
    },
  };
  const expected1 = 6;
  const result1 = nestedEvenSum(input1);
  console.log("Test 1:", result1 === expected1 ? "PASS" : "FAIL");
  console.log("Output:", result1);
  console.log("Expected:", expected1);

  // Test case 2
  const input2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 4 }, ee: "car" },
  };
  const expected2 = 12;
  const result2 = nestedEvenSum(input2);
  console.log("Test 2:", result2 === expected2 ? "PASS" : "FAIL");
  console.log("Output:", result2);
  console.log("Expected:", expected2);

  // Test case 3: Objek kosong
  const input3 = {};
  const expected3 = 0;
  const result3 = nestedEvenSum(input3);
  console.log("Test 3:", result3 === expected3 ? "PASS" : "FAIL");
  console.log("Output:", result3);
  console.log("Expected:", expected3);

  // Test case 4: Objek dengan angka ganjil saja
  const input4 = { a: 1, b: { c: 3, d: 5 } };
  const expected4 = 0;
  const result4 = nestedEvenSum(input4);
  console.log("Test 4:", result4 === expected4 ? "PASS" : "FAIL");
  console.log("Output:", result4);
  console.log("Expected:", expected4);

  // Test case 5: Objek dengan nilai null dan undefined
  const input5 = { a: 2, b: null, c: undefined, d: { e: 4, f: null } };
  const expected5 = 6;
  const result5 = nestedEvenSum(input5);
  console.log("Test 5:", result5 === expected5 ? "PASS" : "FAIL");
  console.log("Output:", result5);
  console.log("Expected:", expected5);
}

// Jalankan unit testing
testNestedEvenSum();
