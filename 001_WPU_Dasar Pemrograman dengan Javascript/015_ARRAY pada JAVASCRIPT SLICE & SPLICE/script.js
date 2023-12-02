// manipulasi array

// 1. menambah isi array
// let arr = [];
// arr[0] = 'Sandhika';
// arr[1] = 'Galih';
// arr[2] = 'Nofa';
// arr[3] = 'Doddy';
// console.log(arr);


// 2. Menghapus isi array
// let arr = ['Sandhika', 'Galih', 'Nova'];
// arr[1] = undefined;
// console.log(arr);


// 3. Menampilkan isi array
// let arr = ['Sandhika', 'Galih', 'Nova'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


























// method pada array
// 1. join
// let arr = ['Sandhika', 'Galih', 'Nova'];
// console.log(arr.join(' - '));


// 2. push & pop
// arr.push('Doddy');
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
// arr.unshift('Doddy');
// arr.shift();
// console.log(arr.join(' - '));


// 4. splice
// splice(indexAwal(mulai), mauDihapusBerapa(optional), elemenBaru1(optional), elemenBaru2(optional))
// let arr = ['Sandhika', 'Galih', 'Nova'];
// arr.splice(2, 0, 'Doddy');
// console.log(arr.join(' - '));
// arr.splice(1,2, 'Doddy', 'Fitri');
// console.log(arr.join(' - '));


// 5. slice
// slice(indexAwal, akhir)
let arr = ['Sandhika', 'Galih', 'Nofa', 'Doddy', 'Fitri'];
let arr2 = arr.slice(1,3);
console.log(arr2.join(' - '));
