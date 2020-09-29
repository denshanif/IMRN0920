// Welcome //
var welcome = "Selamat Datang di Game Werewolf";
console.log(welcome);
// Pembatas //
var linebreak = "===============================";
console.log(linebreak);

// Conditonal //

var nama = ''
var peran = ''
if (nama == '' && peran == '') {
    console.log("Nama harus diisi!");
}

var nama = "John"
var peran = ''
if (nama == "John" && peran == '') {
    console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
}

var nama = "Jane"
var peran = "Penyihir"
if (nama == "Jane" && peran == "Penyihir") {
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Hei " + peran + " " + nama + ", kamu dapat melihat siapa yang menjadi werewolf!");
}

var nama = "Jenita"
var peran = "Guard"
if (nama == "Jenita" && peran == "Guard") {
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Hei " + peran + " " + nama + ", kamu akan membantu melindungi temanmu dari serangan werewolf.");
}

var nama = "Junaedi"
var peran = "Werewolf"
if (nama == "Junaedi" && peran == "Werewolf") {
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Hei " + peran + " " + nama + ", Kamu akan memakan mangsa setiap malam!");
}

var tanggal = 9;
var bulan = 2;
var tahun = 2002;

switch (tanggal) {
    case 9: {
        tanggal="9"; break;
    }
}
switch (bulan) {
    case 2: {
        bulan="Februari"; break;
    }
}
switch (tahun) {
    case 2002: {
        tahun="2002"; break;
    }
}
console.log(tanggal,bulan,tahun);