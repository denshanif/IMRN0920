// Soal No. 1

function range(startNum, finishNum) {
    var array = []
    if (startNum <= finishNum) {
        for (i = startNum; i <= finishNum; i++) {
            array.push(i)
        }
    } else if (startNum >= finishNum) {
        for (i = startNum; i >= finishNum; i--) {
            array.push(i)
        }
    } else {
        array.push(-1)
    }
    return array
}
console.log(range(1, 10))
console.log(range(1))
console.log(range(11, 18))
console.log(range(54, 50))
console.log(range())

// Break
console.log(" ")
// Soal No. 2

function rangeWithStep(startNum, finishNum, step) {
    var array = []
    if (startNum <= finishNum) {
        for (i = startNum; i <= finishNum; i += step) {
            array.push(i)
        }
    } else if (startNum >= finishNum) {
        for (i = startNum; i >= finishNum; i -= step) {
            array.push(i)
        }
    }
    return array
}

console.log(rangeWithStep(1, 10, 2))
console.log(rangeWithStep(11, 23, 3))
console.log(rangeWithStep(5, 2, 1))
console.log(rangeWithStep(29, 2, 4))

// Break
console.log(" ")
// Soal No. 3

function sum(startNum = 0, finishNum = 0, step = 1) {
    var angka = []
    var jumlah = 0
    if (startNum <= finishNum) {
        for (i = startNum; i <= finishNum; i += step) {
            angka.push(i)
            jumlah = jumlah + i
        }
    } else if (startNum >= finishNum) {
        for (i = startNum; i >= finishNum; i -= step) {
            angka.push(i)
            jumlah = jumlah + i
        }
    }
    return jumlah
}

console.log(sum(1, 10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15, 10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 

// Break
console.log(" ")
// Soal No. 4

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(input) {
    for (var data = 0; data < input.length;) {
        console.log(`Nomor ID: ${input[data][0]} \nNama Lengkap: ${input[data][1]} \nTTL: ${input[data][2]} ${input[data][3]} \nHobi: ${input[data][4]} \n`)
        data++
    }
}

dataHandling(input)

// Break
console.log(" ")
// Soal No. 5

function balikKata(word) {
    var balik = ""
    for (var i = word.length-1; i>=0; i--) {
        balik += word[i]
    }
    return balik
}

console.log(balikKata("Kasur Rusak"))
console.log(balikKata("SanberCode"))
console.log(balikKata("Haji Ijah"))
console.log(balikKata("racecar"))
console.log(balikKata("I am Sanbers"))

// Break
console.log(" ")
// Soal No. 6

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2() {
    input.splice(1,2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro")
    return input

}

var bulan = input[3].split("/");
var namaBulan = bulan[1];
switch (namaBulan) {
    case "05": {
        namaBulan="Mei"; break;
    }
}

var tanggal = input[3].split("/")

var bulan1 = input[3].split("/")
var join = bulan1.join("-")

var nama = input[1].slice(0, 14)

console.log(dataHandling2(input))
console.log(namaBulan)
console.log(tanggal.sort(function (a, b) { return b - a }))
console.log(join)
console.log(nama)