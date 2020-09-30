// Soal Nomor 1 //
console.log("LOOPING PERTAMA");

var angka = 2;

while (angka <= 20) {
    console.log(angka + " " + "- I love coding");
    angka+=2;
}

console.log("LOOPING KEDUA");

var angka2 = 20;

while (angka2 >= 2) {
    console.log(angka2 + " " + "- I will become a mobile developer");
    angka2 -= 2;
}

// Soal Nomor 2 //
for (var angka3 = 1; angka3 <= 20; angka3++) {
    if (angka3 % 2 != 0 && angka3 % 3 != 0) {
        console.log(angka3 + "- Santai");
    }
    if (angka3 % 2 == 0) {
        console.log(angka3 + "- Berkualitas");
    }
    if (angka3 % 3 == 0 && angka3 % 2 !== 0) {
        console.log(angka3 + "- I Love Coding");
    }
}

// Soal Nomor 3 //
var baris, kolom;
for (baris = 1; baris <= 4; baris++) {
    for (kolom = 1; kolom <= 8; kolom++) {
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}

// Soal Nomor 4 //
var baris1, kolom1;
for (baris1 = 1; baris1 <= 7; baris1++) {
    for (kolom1 = 1; kolom1 <= baris1; kolom1++) {
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}

// Soal Nomor 5 //
var horizontal = 0;
while (horizontal < 8) {
    var vertical = 0, output = ""
    while (vertical < 8) {
        output += (horizontal + vertical) % 2 == 0 ? " " : "#"
        vertical++
    }

    console.log(output)
    horizontal++
}