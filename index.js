// ! Dont change this code
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// @ Try to check and change the filterOddNumber function
// Ex: given param = [1, 2, 3, 4, 5], then return must [2, 4] not "1,3,5"
const filterOddNumber = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};

/**
 Fungsi filterOddNumber menerima satu argumen, yaitu array angka. 
 Fungsi tersebut kemudian menggunakan metode filter() untuk menyaring angka-angka dari array tersebut. 
 Metode filter() menerima satu fungsi sebagai argumennya. 
 Fungsi tersebut kemudian digunakan untuk menentukan apakah angka akan dimasukkan ke dalam array hasil penyaringan.

 Dalam kasus ini, fungsi filterOddNumber menggunakan fungsi num % 2 !== 0 untuk menentukan apakah 
 angka akan dimasukkan ke dalam array hasil penyaringan. 
 Fungsi tersebut mengembalikan nilai true jika angka adalah ganjil dan false jika angka adalah genap.
 Karena fungsi num % 2 !== 0 mengembalikan nilai true untuk angka ganjil, maka fungsi filterOddNumber
  akan memasukkan semua angka ganjil ke dalam array hasil penyaringan. 

 Untuk menyaring angka genap, kondisinya harus num % 2 === 0. 
 Fungsi tersebut akan mengembalikan nilai true jika angka adalah genap dan false jika angka adalah ganjil.
 Selain itu, fungsi filterOddNumber menggunakan .join(",") untuk mengembalikan string angka yang dipisahkan koma.
 Namun, fungsi tersebut seharusnya mengembalikan array angka yang disaring. 
 Untuk mengembalikan array angka, fungsi tersebut dapat menggunakan return arr.filter((num) => num % 2 === 0).
 */

// ! Dont change this code
const epochDateToUTC = (epochDate) => {
  const d = new Date(0);
  d.setUTCSeconds(epochDate);
  return d.toUTCString();
};

// ! Dont change this code
module.exports = {
  capitalize,
  filterOddNumber,
  epochDateToUTC,
};