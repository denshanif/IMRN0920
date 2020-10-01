// Soal No. 1

function teriak() {
    var kalimat = "Halo Sanbers!"
    return kalimat
}

console.log(teriak());

// Soal No. 2

function kalikan(num1, num2) {
    return num1 * num2
}

var num1 = 12
var num2 = 4

var hasilKali = kalikan(num1, num2)
console.log(hasilKali)

// Soal No. 3

function introduce(name, age, address, hobby) {
    var kalimat2 = "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!"
    return kalimat2
}

var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)