import Sidebar from './Sidebar.js';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function BasvuruGoruntule(){
    
    const [bilgi, setBilgi] = useState('');
    const [error, setError] = useState('');

    useEffect( () => {

        const bilgiGetir = async () => {
                const id = sessionStorage.getItem("id");

                console.log(id);

            try{

                const response = await axios.post("http://localhost:3001/formGoster",
                {id}
            );

            if(response.status===200){
                setBilgi(response.data);
            }

            }catch(err){
                setError("Kullanici bilgileri gosterilemedi.");
            }
        }

        
            bilgiGetir();

    }, []);



    return(
        <>
        <div className="row">
            <div className="col-3">
                <Sidebar
                    gor_active="active"
                    gor_disable="disabled"
                    form_to="/portal/BasvuruFormu"

                />
            </div>

            <div className="col-9">
                <h2 className='text-center my-4'>Basvuru Görüntüle</h2>
                <form>
                    <div id="basvuru2" className="row">
                        <div className="col-4">

                            <label for="formGroupExampleInput"
                                class="form-label">İsim:</label>
                            <br />
                            <input type="text"
                                placeholder="İsminiz"
                                value={bilgi.isim}
                            /><br />
                            <label for="formGroupExampleInput"
                                class="form-label">Soyisim:</label>
                            <br />
                            <input type="text"
                                placeholder="Soyisminiz"
                                value={bilgi.soyisim}
                            /><br />
                            <label for="formGroupExampleInput"
                                class="form-label">Bölüm:</label>
                            <br />
                            <input type="text"
                                placeholder="Bolumunuz"
                                value={bilgi.bolum}
                            /><br />

                            <label for="formGroupExampleInput"
                                class="form-label">Kimlik No:</label>
                            <br />
                            <input type="text"
                                placeholder="Kimlik No"
                                value={bilgi.kimlikno}
                            /><br />
                            <label for="formGroupExampleInput"
                                class="form-label">Doğum Tarihi:</label>
                            <br />
                            <input type="text"
                                placeholder="Doğum Tarihi"
                                value={bilgi.dogumtarihi}
                            /><br />

                            <label for="formGroupExampleInput"
                                class="form-label">Cinsiyet:</label>
                            <br />
                            <input type="text"
                                placeholder="Cinsiyet"
                                value={bilgi.cinsiyet}
                            /><br />
                        </div>
                        <div className="col-4">



                            <label for="formGroupExampleInput"
                                class="form-label">Mezuniyet Durumu:</label>
                            <br />
                            <input type="text"
                                placeholder="Mezuniyet Durumu"
                                value={bilgi.mezuniyetDurumu}
                            /><br />

                            <label for="formGroupExampleInput"
                                class="form-label">Adres-Ülke:</label>
                            <br />
                            <input type="text"
                                placeholder="Adres-Ülke"
                                value={bilgi.adresUlke}
                            /><br />

                            <label for="formGroupExampleInput"
                                class="form-label">Adres-Şehir:</label>
                            <br />
                            <input type="text"
                                placeholder="Adres-Şehir"
                                value={bilgi.adresSehir}
                            /><br />





                            <label for="formGroupExampleInput"
                                class="form-label">Adres-İlçe:</label>
                            <br />
                            <input type="text"
                                placeholder="Adres-İlçe"
                                value={bilgi.adresIlce}
                            /><br />

                            <label for="formGroupExampleInput"
                                class="form-label">Açık Adres:</label>
                            <br />
                            <input type="text"
                                placeholder="Açık Adres"
                                value={bilgi.acikAdres}
                            /><br />

                            <label for="formGroupExampleInput"
                                class="form-label">Engel Durumu:</label>
                            <br />
                            <input type="text"
                                placeholder="Engel Durumu"
                                value={bilgi.engelDurumu}
                            /><br />
                        </div>
                        <div className="col-4">
                           <label for="formGroupExampleInput"
                                class="form-label">EngelBilgisi</label>
                            <br />
                            <input type="text"
                                placeholder="Engel Bilgisi"
                                value={bilgi.engelBilgisi}
                            /><br />

                            <label for="formGroupExampleInput"
                                class="form-label">Mezuniyet Tarihinizi Yazınız:</label>
                            <br />
                            <input type="text"
                                placeholder="Mezuniyet Tarihi"
                                value={bilgi.mezuniyetTarihi}
                            /><br />

                            <label for="formGroupExampleInput"
                                class="form-label">Ortalamanız:</label>
                            <br />
                            <input type="text"
                                placeholder="Ortalama"
                                value={bilgi.ortalama}
                            /><br />

                            
                            
                            
                            
                            
                            
                            

                            <label for="formGroupExampleInput"
                                class="form-label">Telefon:</label>
                            <br />
                            <input type="text"
                                placeholder="Telefon"
                                value={bilgi.telefon}
                            /><br />

                            <label for="formGroupExampleInput"
                                class="form-label">Yüklenen Döküman:</label>
                            <br />
                            <input type="text"
                                placeholder="Döküman"
                                value={bilgi.dokuman}
                            /><br />
                        </div>

                    </div>

                    <br />




                </form>
                {error && <p style={{ color: 'red' }}> {error} </p>}
            </div>
        </div>
    </>
    );

}

export default BasvuruGoruntule;