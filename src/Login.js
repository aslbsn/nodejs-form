import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './App.css'
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{

            const response = await axios.post('http://localhost:3001/giris',
                {
                    email,
                    password
                }
            );

            if(response.status === 200){
                if(response.data.message === "1"){
                    sessionStorage.setItem("id", response.data.id);
                    setSuccess('Giriş Başarili. Yonlendiriliyorsunuz...')
                    setTimeout( () => {
                    navigate('/portal');
                }, 1000);  
                }else{
                setError('Kullanici adi veya sifre hatali.');
                }
            }
        }catch(err){
            setError('Kullanici adi ve sifre kontrolünde hata olustu.');
        }


    }


    return (

        <div id="girisbox"className="container bg-light text-dark rounded border 
        border-warning" style={{height:"30em"}}>
         
            <h2 className="h2 mb-3 fw-normal">Giriş</h2>
            <form onSubmit={handleSubmit}>
                <input id="girisbuton" type="email" 
                        placeholder="Mail adresiniz" 
                        value={email} 
                        onChange= {(e) => setEmail(e.target.value)}
                        required />
                <input id="girisbuton" type="password"
                        placeholder="Şifre"
                        value={password}
                        onChange= {(e) => setPassword(e.target.value)}
                        required />
                <button id="girisbuton2" type="submit" className="w-50 btn btn-sm btn-secondary" >Login</button>
            </form>

            {error && <p style={{color:'red'}}> {error} </p> }
            {success && <p style={{color:'green'}}>{success}</p>}

            <p>
                Hesabınız yok mu?<Link to="/kayit">Kayıt ol!</Link>
            </p>
        </div>


    );
}

export default Login;