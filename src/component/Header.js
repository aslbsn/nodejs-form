function Header() {

    return (<>

        <div>
            <header
                className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom text-white">


                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 ">
                    <li><a href="/" class="nav-link px-2 link-secondary">Ana Sayfa</a></li>

                </ul>

                <div className="text-end">
                    <a href="./kayit"> <button type="button" className="btn btn-secondary mx-1">Hesap Aç</button></a>
                    <a href="./giris"> <button type="button"
                        className="btn btn-outline-secondary">Giriş</button></a>
                    <a href="/"><button id="cikiver" type="reset" className="btn btn-outline-secondary mx-1"
                        data-toggle="tooltip" data-html="true" title="Emin misin?">Sayfayı Kapat</button></a>

                </div>
            </header>
        </div>


    </>
    )

}

export default Header;