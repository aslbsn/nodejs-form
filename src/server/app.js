const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodedb"
});

connection.connect((err) => {
    if(err) {
        console.error('Veritabanina baglanirken hata olustu: ', err);
        return;
    }
    console.log('Veritabanina baglanildi.');
});



app.post('/sifreDegis', (req, res) => {

    const { email, password, yeniSifre } = req.body;
  
    // Select user by email and password
    const query = 'SELECT * FROM user WHERE username = ? AND password = ?';
    connection.query(query, [email, password], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal server error');
        return;
      }
      if (results.length === 0) {
        res.status(400).send('Email or password is incorrect');
        return;
      }
      
      // Update user password
      const username = results[0].username;
      const updateQuery = 'UPDATE user SET password = ? WHERE username = ?';
      connection.query(updateQuery, [yeniSifre, username], (err, result) => {
        if (err) {
          console.error('Error updating password: ', err);
          res.status(500).send('Internal server error');
          return;
        }
        res.status(200).send('Password updated successfully');
      });
    });
  });
  




app.post('/kayit', (req,res) => {

    const {email , password} = req.body;

    const query = "INSERT INTO user (username,password) VALUE (?,?)";
    
    connection.query(query, [email, password], (err,result) => {

        if(err){
            console.error("Veritabanina bilgi girereken hata: ", err);
            res.status(500).send({error: "Kayit olusturulurken bir hata olustu."});
            return;
        }
        res.status(200).send({message: "Kayit basarili!"});

    })
    
});

app.post('/giris', (req,res) => {

    const {email, password} = req.body;

    const query = "SELECT * FROM user WHERE username=? AND password=?";

    connection.query(query, [email, password], (err, result) => {
        if(err){
            console.error("Bilgilerin kontrolunde hata olustu. ", err);
            res.status(500).send({error: 'Bilgilerin kontrolunde hata olustu.'});
            return;
        }
        if(result.length > 0){
            const user_id = result[0].id_num;

            const isLoginQuery = "UPDATE user SET isLogin = 1 WHERE id_num=?";

            connection.query(isLoginQuery, user_id, (err,result) => {
                if(err){
                    console.error("Login bilgisi guncellenirken hata olustu. ", err);
                    res.status(500).send({error: 'Login guncellenemedi.'});
                }
            });

            res.status(200).send({message: '1', id: user_id});
        }else{
            res.status(200).send({message: '0'});
        }
        

    })



});


app.post('/signout', (req,res) => {

        const {id} = req.body;

        const query = "UPDATE user SET isLogin = 0 WHERE id_num=?";

        connection.query(query, [id], (err,result) => {
            if(err){
                console.error("isLogin guncellemesinde hata olustu. ", err);
                res.status(500).send({error: 'isLogin guncellemesinde hata olustu.'});
                return;
            }
            
            res.status(200).send({message: 'Kullanici cikisi guncellendi.'});
        });

});

app.post('/formGonder', (req,res) => {

    const {id, isim, soyisim, bolum, kimlikno, dogumtarihi, cinsiyet, adresUlke, adresSehir, adresIlce, acikAdres, engelDurumu, engelBilgisi, mezuniyetDurumu, mezuniyetTarihi, ortalama, telefon, dokuman} = req.body;

    const kontrolQuery = "SELECT * FROM basvuru WHERE basvuran_id = ?";

    connection.query(kontrolQuery, [id], (err,result) => {

        if(result.length > 0){
            res.status(201).send({error: "Aynı hesaptan yalnizca bir basvuru yapilabilir."});
            return;
        }else{
            const query = "INSERT INTO basvuru (basvuran_id, isim, soyisim, bolum, kimlikno, dogumtarihi, cinsiyet, adresUlke, adresSehir, adresIlce, acikAdres, engelDurumu, engelBilgisi, mezuniyetDurumu, mezuniyetTarihi, ortalama, telefon, dokuman) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

            connection.query(query, [id, isim, soyisim, bolum, kimlikno, dogumtarihi, cinsiyet, adresUlke, adresSehir, adresIlce, acikAdres, engelDurumu, engelBilgisi, mezuniyetDurumu, mezuniyetTarihi, ortalama, telefon, dokuman], (err,result) => {
                if(err){
                    console.error("Veritabanina ekleme yapilirken hata olustu. ", err);
                    res.status(500).send({error: "Veritabanina ekleme yapilirken hata olustu."});
                    return;
                }

                res.status(200).send({message: "Basvuru basariyla kaydedildi."});
            });
        }

    });

});

app.post("/formGoster", (req,res) => {

    const user_id = req.body.id;

    const query = "SELECT * FROM basvuru WHERE basvuran_id=?";

    connection.query(query, [user_id], (err,result) => {

        if(err){
            console.error("Veritabanindan bilgi alinirken hata olustu.", err);
            res.status(500).send({error: "Veritabanindan bilgi alinirken hata olustu."});
            return;
        }if(result.length===0){
            res.status(404).send({message: "Basvuru Bulunamadi."});

        }else{
            res.status(200).send({isim: result[0].isim, 
                soyisim: result[0].soyisim, 
                bolum: result[0].bolum,               
                kimlikno: result[0].kimlikno,
                dogumtarihi: result[0].dogumtarihi,
                cinsiyet: result[0].cinsiyet,
                adresUlke: result[0].adresUlke,
                adresSehir: result[0].adresSehir,
                adresIlce: result[0].adresIlce,
                acikAdres: result[0].acikAdres,
                engelDurumu: result[0].engelDurumu,
                engelBilgisi: result[0].engelBilgisi,
                mezuniyetDurumu: result[0].mezuniyetDurumu,
                mezuniyetTarihi: result[0].mezuniyetTarihi,
                ortalama: result[0].ortalama,
                telefon: result[0].telefon,
                dokuman: result[0].dokuman});
        }
       


    });



});



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server ${PORT} üzerinde dinleniyor.`);
});
