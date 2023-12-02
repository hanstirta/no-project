// let s = '';
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j <= i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********



// let s = '';
// for (let i = 10; i > 0; i--) {
//     for (let j = 0; j <  i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *


// let s = '';
// for (let i = 10; i > 0; i--) {
//     for (let j = 0; j <= 10; j++) {
//         if (j >= i) {
//             s += '* ';
//         } else {
//             s += ' ';
//         }
//     }
//     s += '\n';
// }
// console.log(s);

        //             * 
        //            * * 
        //           * * * 
        //          * * * * 
        //         * * * * * 
        //        * * * * * * 
        //       * * * * * * * 
        //      * * * * * * * * 
        //     * * * * * * * * * 
        //    * * * * * * * * * *


// let tinggiSegitiga = 10;

// for (let i = 1; i <= tinggiSegitiga; i++) {
//   let baris = '';
  
//   // Menambahkan spasi sebelum bintang
//   for (let j = 1; j <= tinggiSegitiga - i; j++) {
//     baris += ' ';
//   }

//   // Menambahkan bintang
//   for (let k = 1; k <= i; k++) {
//     baris += '*';
//   }

//   console.log(baris);
// }

//           *
//          **
//         ***
//        ****
//       *****
//      ******
//     *******
//    ********
//   *********
//  **********


// let s ="";
// for (let i = 10; i > 0; i--) {
//   for (let j = 10; j > 0; j--) {
//     if (j <= i) {
//       s += "*";
//     } else {
//       s += " ";
//     }
//   }
//   s += "\n";
// }
// console.log(s);

// **********
//  *********
//   ********
//    *******
//     ******
//      *****
//       ****
//        ***
//         **
//          *


// var s = "";
// for (var i = 0; i < 6; i++) {
//   if (i % 2 == 0) {
//     for (var j = 0; j < 6; j++) {
//       if (j % 2 == 0) {
//         s += "#";
//       } else {
//         s += " ";
//       }
//     }
//     s += "\n";
//   } else {
//     for (var j = 0; j < 6; j++) {
//       if (j % 2 == 0) {
//         s += " ";
//       } else {
//         s += "#";
//       }
//     }
//     s += "\n";
//   }
// }

// console.log(s);


// # # # 
//  # # #
// # # # 
//  # # #
// # # # 
//  # # #
  

// let tinggiSegitiga = 10;

// // Membuat setengah bagian atas segitiga
// for (let i = 1; i <= tinggiSegitiga; i++) {
//   let baris = '';

//   for (let j = 1; j <= i; j++) {
//     baris += '*';
//   }

//   console.log(baris);
// }

// // Membuat setengah bagian bawah segitiga
// for (let i = tinggiSegitiga - 1; i >= 1; i--) {
//   let baris = '';

//   for (let j = 1; j <= i; j++) {
//     baris += '*';
//   }

//   console.log(baris);
// }

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *


// let tinggiSegitiga = 10;

// // Membuat segitiga bagian atas
// for (let i = 1; i <= tinggiSegitiga; i++) {
//   let baris = '';

//   // Menambahkan spasi sebelum bintang
//   for (let j = 1; j <= tinggiSegitiga - i; j++) {
//     baris += ' ';
//   }

//   // Menambahkan bintang
//   for (let k = 1; k <= i; k++) {
//     baris += '* ';
//   }

//   console.log(baris);
// }

// // Membuat segitiga bagian bawah
// for (let i = tinggiSegitiga - 1; i >= 1; i--) {
//   let baris = '';

//   // Menambahkan spasi sebelum bintang
//   for (let j = 1; j <= tinggiSegitiga - i; j++) {
//     baris += ' ';
//   }

//   // Menambahkan bintang
//   for (let k = 1; k <= i; k++) {
//     baris += '* ';
//   }

//   console.log(baris);
// }


//           * 
//          * * 
//         * * * 
//        * * * * 
//       * * * * * 
//      * * * * * * 
//     * * * * * * * 
//    * * * * * * * * 
//   * * * * * * * * * 
//  * * * * * * * * * * 
//   * * * * * * * * * 
//    * * * * * * * * 
//     * * * * * * * 
//      * * * * * * 
//       * * * * * 
//        * * * * 
//         * * * 
//          * * 
//           * 



