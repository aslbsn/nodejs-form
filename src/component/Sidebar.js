import {Router, Route, Routes, Link, useNavigate} from 'react-router-dom';


import '../App.css'
function Sidebar(props) {

    const navigate = useNavigate();

    return (
        <>
            {/*SIDEBAR*/}
            <div id="sidebar" className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: "280px" }}>
                <a href="/portal" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">

                    <span className="fs-4">Sidebar</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link className={`nav-link ${props.form_active} ${props.form_disable}`}
                            aria-current="page"
                            to={`${props.form_to}`}
                        >
                            Başvuru Formu</Link>
                    </li>
                    <li>
                        <Link className={`nav-link ${props.gor_active} ${props.gor_disable}`}
                            aria-current="page"
                            to={`${props.gor_to}`}
                        >
                            Başvuru Görüntüle</Link>
                    </li>
                    
                    <li>
                        <Link className={`nav-link `}
                            aria-current="page"
                            to={`/sifre`}
                        >
                            Şifre Değiştir</Link>
                    </li>

                    <li>
                        <Link className={`nav-link `}
                            aria-current="page"
                            to={`/signout`}
                        >
                            Çıkış</Link>
                    </li>
                </ul>



            </div>
            {/*SIDEBAR END*/}
        </>
    );


}

export default Sidebar;