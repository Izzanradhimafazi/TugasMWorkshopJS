// X dan O

// Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
// Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
  var xCount = 0;
  var oCount = 0;

  // Menghitung jumlah karakter x dan o pada string
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      xCount++;
    } else if (str[i] === 'o') {
      oCount++;
    }
  }

  // Mengembalikan hasil perbandingan jumlah karakter x dan o
  return xCount === oCount;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true