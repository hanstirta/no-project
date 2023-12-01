// let nama = prompt('masukkan nama : ');
// alert(nama);

// let tes = confirm('kamu yakin?');
// // alert(tes);
// if (tes === true) {
//     alert('user menekan OK!');
// } else {
//     alert('user menekan CANCEL!');
// }

alert('selamat datang ...');
let lagi = true;

while(lagi === true) {
    let nama = prompt('masukkan nama: ');
    alert('halo ' + nama);

    lagi = confirm('coba lagi?');
}

alert('terima kasih...');
