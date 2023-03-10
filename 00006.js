// Konversi Menit

// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu dalam menit. 
// Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
  const jam = ~~(menit / 3600);
  const mnt = ~~((menit % 3600) / 60);
  const dtk = ~~menit % 60;

  let hasil = "";
  
  if (jam > 0) {
    hasil += "" + jam + ":" + (mnt < 10 ? "0" : "");
    }
  hasil += "" + mnt + ":" + (dtk < 10 ? "0" : "");
  hasil += "" + dtk;
  return hasil;
}
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00