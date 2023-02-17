// Balik Kata

// Problem

// Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. 
// Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".

function balikKata(kata) {
  var reversedKata = '';

  // Mengambil setiap karakter pada kata dari belakang dan menambahkannya ke reversedKata
  for (var i = kata.length - 1; i >= 0; i--) {
    reversedKata += kata[i];
  }

  // Mengembalikan kata yang sudah dibalik
  return reversedKata;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS