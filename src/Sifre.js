import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Sidebar from "./Sidebar.js";
import Swal from 'sweetalert2';


function Sifre() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [yeniSifre, setYeniSifre] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const kullanici_adi = sessionStorage.getItem('email');
        const sifre = sessionStorage.getItem('password');

        if (email === kullanici_adi && password === sifre) {
            sessionStorage.setItem('password', yeniSifre);
            navigate('/portal');
        } else {
            Swal.fire({
                title: 'Hata!',
                text: 'Kullanıcı adı veya şifre yanlış',
                icon: 'warning',
                confirmButtonColor: 'pink',
                confirmButtonText: 'Tamam'
            });
        }
    };

    return (
        <>

            <div className="row">
                <div className="col-3">
                    <Sidebar
                        gor_to="/portal/BasvuruGoruntule"
                        form_to="/portal/BasvuruFormu"
                    />
                </div>

                <div className="col-9">

                    <div id="girisbox" className="container bg-light text-dark rounded border 
                         border-warning" style={{ height: "30em" }}>

                        <h3 className="h2 mb-3 fw-normal">Şifre Değiştir</h3>

                        <form onSubmit={handleSubmit} id="signin_form">
                            <div>
                                <label htmlFor="email">Email adresi</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Mail adresiniz"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Şifre</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Şifre"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="yeniSifre">Yeni Şifre</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="yeniSifre"
                                    placeholder="Yeni Şifre"
                                    value={yeniSifre}
                                    onChange={(e) => setYeniSifre(e.target.value)}
                                    required
                                />
                            </div>

                            <button id="girisbuton2" type="submit" className="w-50 btn btn-sm btn-secondary mt-5" >Kaydet</button>

                        </form>

                        {error && <p style={{ color: 'red' }}> {error} </p>}

                    </div>

                </div>

            </div>

        </>
    );
}

export default Sifre;
