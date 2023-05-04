var mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodedb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Baglandi!");
var sql = "CREATE TABLE basvuru (basvuru_id  INT NOT NULL AUTO_INCREMENT, basvuran_id INT NOT NULL, isim VARCHAR(50) NOT NULL, soyisim VARCHAR(50) NOT NULL, bolum VARCHAR(30) NOT NULL, kimlikno INT NOT NULL, dogumtarihi DATE NOT NULL, cinsiyet VARCHAR(50) NOT NULL, adresUlke VARCHAR(50) NOT NULL, adresSehir VARCHAR(50) NOT NULL, adresIlce VARCHAR(50) NOT NULL, acikAdres VARCHAR(50) NOT NULL, engelDurumu VARCHAR(50) NOT NULL, engelBilgisi VARCHAR(50) NULL, mezuniyetDurumu VARCHAR(50) NOT NULL, mezuniyetTarihi DATE NULL, ortalama INT NULL, telefon INT NOT NULL, dokuman VARCHAR(250) NOT NULL, PRIMARY KEY(basvuru_id))";
// 
con.query(sql,function(err,result){
    if(err) throw err;
    console.log("Tablo oluşturuldu.");
});
})