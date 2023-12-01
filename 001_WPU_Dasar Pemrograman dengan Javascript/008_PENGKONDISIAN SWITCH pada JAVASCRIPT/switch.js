let item = prompt('Masukkan nama makanan/minuman : \n (cth : nasi, daging, susu, hamburger, softdrink)');

switch (item) {
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('makanan/minuman SEHAT!');
        break;
    case 'hamburger' :
    case 'softdrink' :
        alert('makanan/minuman tidak SEHAT!');
        break;
    default :
        alert('anda memasukkan makanan/minuman yang salah!');
        break;
}