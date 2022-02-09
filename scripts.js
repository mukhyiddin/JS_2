// /// Soal - 01
// /// Dibawah ini akan ditampilkan daftar pengeluaran bulan ini beserta gaji yang akan diterima, tugas-mu adalah untuk menghitung gaji yang tersisa

/// Pegeluaran
	let gundam = 750000
	let makan = 2000000
	let kost = 1000000
	let subscription = 250000
let totalPengeluaran = gundam + makan + kost + subscription;
	/// Gaji
	let gajiPokok =5000000;
	let gajiBonus =5000000 * 10 / 100;
	let gajiLembur = 5000000 * 5 / 100;
let totalgaji = gajiPokok + gajiBonus + gajiLembur;



/// Sisa Gaji Should Be 1.750.000
const sisaGaji = totalgaji - totalPengeluaran;
	console.log ("Jawaban Soal - 01 : ");
	console.log("Total Pengeluaran : " + totalPengeluaran);
	console.log("Total Semua Gaji : " + totalgaji);
	console.log("Sisa Gaji Setelah Pengeluaran : " + sisaGaji);

// /// Soal - 02
// /// Gunakan operator yang tepat untuk mengetahui apakah 2 variable dibawah ini memiliki nilai yang sama (tipe data tidak termasuk)
	console.log("----------------------------------------------------------");
const oneInString = "1";
const oneInNumber = 1;
const isSame = oneInNumber == oneInString;
	console.log ("Jawaban Soal - 02 : " + isSame);


// /// Soal - 03
// /// Gunakan operator yang tepat untuk mengetahui apakah studentA memiliki nilai yang lebih tinggi atau sama dengan studentB
const studentA = 75;
const studentB = 80;
const isHigher = studentA >= studentB;
	console.log ("Jawaban Soal - 03 : " + isHigher);


// /// Soal - 04
// /// Gunakan operator yang tepat untuk membedakan 2 buah variable yang terdapat pada soal-02 berdasarkan value-nya (tipe data juga dihitung)
const final = oneInNumber === oneInString;
	console.log ("Jawaban Soal - 04 : " + final);

