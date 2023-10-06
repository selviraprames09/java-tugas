// Contoh penggunaan if-else
var nilai = 70;
if (nilai >= 69) {
    console.log("Selamat, Anda lulus!");
} else {
    console.log("Maaf, Anda tidak lulus.");
}

// Contoh nested if
var umur = 18;
if (umur >= 18) {
    if (umur <= 25) {
        console.log("Anda adalah seorang dewasa muda.");
    } else {
        console.log("Anda adalah seorang dewasa.");
    }
} else {
    console.log("Anda masih anak-anak.");
}

// Contoh penggunaan switch case
var hari = "Senin";
switch (hari) {
    case "Senin":
        console.log("Hari ini adalah Senin.");
        break;
    case "Selasa":
        console.log("Hari ini adalah Selasa.");
        break;
    default:
        console.log("Hari ini bukan Senin atau Selasa.");
}

// Contoh penggunaan for statement
for (var i = 1; i <= 5; i++) {
    console.log("Iterasi ke-" + i);
}

// Contoh penggunaan while loop
var angka = 1;
while (angka <= 5) {
    console.log("Angka: " + angka);
    angka++;
}

// Contoh penggunaan do while loop
var x = 1;
do {
    console.log("Nilai x: " + x);
    x++;
} while (x <= 5);

// Contoh penggunaan function
function tambah(a, b) {
    return a + b;
}

var hasilPenambahan = tambah(5, 3);
console.log("Hasil penambahan: " + hasilPenambahan);
