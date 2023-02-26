function hesapla() {
    let sayi = document.getElementById("sayi").value;
    let  = document.getElementById("artis").value;
    let sonuc = sayi * 0.25;
    let toplam = parseFloat(sonuc) + parseFloat(sayi);
    document.getElementById("sonuc").innerHTML ="" + sonuc;
    document.getElementById("toplam").innerHTML ="" + toplam;
}