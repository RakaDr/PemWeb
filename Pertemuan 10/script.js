let kursRupiah = 15831;

function hitungKursRupiah(){
    let rupiahNumber = document.getElementById("rupiahNumber").value;
    document.getElementById('dollar').innerHTML = rupiahNumber / kursRupiah; // Perbaikan di sini
}

function hitungKursDollar(){
    let dollarNumber = document.getElementById("dollarNumber").value;
    document.getElementById("rupiah").innerHTML = dollarNumber * kursRupiah; // Perbaikan di sini
}