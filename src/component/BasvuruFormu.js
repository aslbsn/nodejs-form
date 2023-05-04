import React, { useState } from 'react';
import Sidebar from './Sidebar.js';
import axios from 'axios';

import { Button } from 'react-bootstrap';
import '../App.css'

function BasvuruFormu() {

    const [isim, setIsim] = useState('');
    const [soyisim, setSoyisim] = useState('');
    const [bolum, setBolum] = useState('');
    const [kimlikno, setKimlikno] = useState('');
    const [dogumtarihi, setDogumtarihi] = useState('');
    const [cinsiyet, setCinsiyet] = useState('');
    const [adresUlke, setAdresUlke] = useState('');
    const [adresSehir, setAdresSehir] = useState('');
    const [adresIlce, setAdresIlce] = useState('');
    const [acikAdres, setAcikAdres] = useState('');
    const [engelDurumu, setEngelDurumu] = useState('');
    const [engelBilgisi, setEngelBilgisi] = useState('');
    const [mezuniyetDurumu, setMezuniyetDurumu] = useState('');
    const [mezuniyetTarihi, setMezuniyetTarihi] = useState('');
    const [ortalama, setOrtalama] = useState('');    
    const [telefon, setTelefon] = useState('');
    const [dokuman, setDokuman] = useState('');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const id = sessionStorage.getItem('id');


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post("http://localhost:3001/formGonder", {
                id,
                isim,
                soyisim,
                bolum,
                kimlikno,
                dogumtarihi,
                cinsiyet,
                adresUlke,
                adresSehir,
                adresIlce,
                acikAdres,
                engelDurumu,
                engelBilgisi,
                mezuniyetDurumu,
                mezuniyetTarihi,
                ortalama,
                telefon,
                dokuman,
            }
            );
            console.log(response);
            if (response.status === 200) {
                setSuccess("Basvuru basarili sekilde alindi.");
                setIsim('');
                setSoyisim('');
                setBolum('');
                setKimlikno('');
                setDogumtarihi('');
                setCinsiyet('');
                setAdresUlke('');
                setAdresSehir('');
                setAdresIlce('');
                setAcikAdres('');
                setEngelDurumu('');
                setEngelBilgisi('');
                setMezuniyetDurumu('');
                setMezuniyetTarihi('');
                setOrtalama('');
         
                setTelefon('');
                setDokuman('');

                setError('');
            } else {
                setError(response.data.error);
            }


        } catch (err) {
            console.log(err);
            setError("Veritabani baglantisinda hata olustu. ", err);
        }
    }

    return (

        <div className="row">
            <div className="col-sm-3">
                <Sidebar
                    form_active="active"
                    form_disable="disabled"
                    gor_to="/portal/BasvuruGoruntule" />
            </div>


            <div className="col-sm-9 my-4">

                <h3 className="text-center">BAŞVURU FORMU</h3>
                <form onSubmit={handleSubmit}>

                    <div id="basvuru" className="row">


                        <div className="col-sm-4">
                            <input className="mb-2" type="text"
                                placeholder="İsminiz"
                                value={isim}
                                onChange={(e) => setIsim(e.target.value)}
                                required /><br />
                            <input className="mb-2" type="text"
                                placeholder="Soyisminiz"
                                value={soyisim}
                                onChange={(e) => setSoyisim(e.target.value)}
                                minLength="2"
                                required /><br />
                            <input className="mb-2" type="text"
                                placeholder="Bolumunuz"
                                value={bolum}
                                onChange={(e) => setBolum(e.target.value)}
                                minLength="3"
                                required /><br />
                            <input className="mb-2" type="number"
                                placeholder="KimlikNumaranız"
                                value={kimlikno}
                                onChange={(e) => setKimlikno(e.target.value)}
                                minLength="11"
                                required /><br />


                            <div>
                                <label for="formGroupExampleInput" class="form-label">Doğum Tarihinizi Yazınız:</label>
                            </div>

                            <input className="mb-2" style={{ width: '190px' }} type="date"
                                placeholder="DoğumTarihiniz"
                                value={dogumtarihi}
                                onChange={(e) => setDogumtarihi(e.target.value)}
                                required /><br />

                            <select
                                className="mb-2" style={{ width: '190px' }}
                                value={cinsiyet}
                                onChange={(e) => setCinsiyet(e.target.value)}
                                required>
                                <option value="" disabled>Cinsiyet</option>
                                <option value="kadın">Kadın</option>
                                <option value="erkek">Erkek</option>
                            </select><br />
                        </div>
                        <div className="col-sm-4">


                            <select
                                className="mb-2" style={{ width: '190px' }}
                                value={mezuniyetDurumu}
                                onChange={(e) => setMezuniyetDurumu(e.target.value)}
                                required>
                                <option value="" disabled>Mezuniyet Durumu</option>
                                <option value="mezun">Mezun</option>
                                <option value="ogrenci">Öğrenci</option>
                            </select><br />


                            <label for="formGroupExampleInput"
                                class="form-label">Mezuniyet Tarihinizi Yazınız:</label>
                            <br />
                            <input className="mb-2" style={{ width: '190px' }} type="date"

                                value={mezuniyetTarihi}
                                onChange={(e) => setMezuniyetTarihi(e.target.value)}
                                placeholder="MezuniyetTarihiniz"
                            /><br />

                            <input className="mb-2" type="number"
                                placeholder="Ortalamanız"
                                value={ortalama}
                                onChange={(e) => setOrtalama(e.target.value)}

                            /><br />


                            <input className="mb-2" type="number"
                                placeholder="Telefon"
                                value={telefon}
                                onChange={(e) => setTelefon(e.target.value)}
                                required /><br />

                            
                            
                            
                            
                            

                            <input className="mb-2" type="text"
                                placeholder="Adres-Ülke"
                                value={adresUlke}
                                onChange={(e) => setAdresUlke(e.target.value)}
                                required /><br />
                        </div>

                        <div className="col-sm-4">


                            <input className="mb-2" type="text"
                                placeholder="Adres-Şehir"
                                value={adresSehir}
                                onChange={(e) => setAdresSehir(e.target.value)}
                                required /><br />
                            <input className="mb-2" type="text"
                                placeholder="Adres-İlçe"
                                value={adresIlce}
                                onChange={(e) => setAdresIlce(e.target.value)}
                                required /><br />

                            <input className="mb-2" type="text"
                                placeholder="Açık Adres"
                                value={acikAdres}
                                onChange={(e) => setAcikAdres(e.target.value)}
                                required /><br />

                            <label for="formGroupExampleInput"
                                class="form-label">Engel Durumu:</label>
                            <br />
                            <select
                                className="mb-2" style={{ width: '190px' }}
                                value={engelDurumu}
                                onChange={(e) => setEngelDurumu(e.target.value)}
                                required>
                                <option value="" disabled>Engel Durumu</option>
                                <option value="var">Var</option>
                                <option value="yok">Yok</option>
                            </select><br />

                            <input className="mb-2" type="text"
                                placeholder="Engel Bilgisi"
                                value={engelBilgisi}
                                onChange={(e) => setEngelBilgisi(e.target.value)}
                            /><br />



                            <label for="formFileMultiple" class="form-label">Döküman Yükle:</label>
                            <br />
                            <input className="mb-2"
                                placeholder="Döküman Yükle"
                                value={dokuman}
                                onChange={(e) => setDokuman(e.target.value)} required
                                type="file"
                            /><br />



                            <Button type="reset" className="btn btn-dark mx-3 mt-5">Temizle</Button>
                            <Button type="submit" className="btn btn-dark mt-5">Gönder</Button>
                        </div>
                    </div>
                </form>
                {error && <p style={{ color: 'red' }}> {error} </p>}
                {success && <p style={{ color: 'green' }}> {success} </p>}
            </div >
        </div >

    );

}

export default BasvuruFormu;