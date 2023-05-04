import React from 'react';
import {Router, Route, Routes, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';

import BasvuruFormu from "./component/BasvuruFormu";
import BasvuruGoruntule from "./component/BasvuruGoruntule";
import Sidebar from "./component/Sidebar.js";

function Portal() {
    return (

        <>
            <div className="row">
                <div className="col-4" id="sidebar">
                    <Sidebar
                        gor_to="BasvuruGoruntule"
                        form_to="BasvuruFormu" />
                </div>
                <div className="col-6">
                    <img src="" />
                    <h5>Başvuru Portal'ina hoşgeldiniz!</h5>
                    <p>Erasmus Programı, öğrencilerin yurtdışındaki yükseköğretim kurumlarında öğrenim görmeleri, staj yapmaları; akademik ve idari personelin yurtdışı tecrübeleri ile mesleki birikimlerini arttırmaları; yükseköğretim kurumlarının işletmelerle işbirliği projeleri geliştirmeleri gibi başlıca faaliyet alanlarında destekler sunmaktadır. Bu hareketlilik kapsamında yapılacak aktiviteleri kontenjan dağılımına göre hibeli/hibesiz olarak gerçekleştirebilirsiniz. </p>




                    <p>Erasmus hareketliliği size;
                        <ul>

                            <li>Yeni ülkeler görme ve yeni kültürler keşfetme şansı</li>
                            <li>Yurtdışında eğitim alma fırsatı,</li>
                            <li>Farklı ülkelerden gelen pek çok insanla tanışma olanağı,</li>
                            <li>Yabancı dil/dillerinizi yerinde geliştirme şansı,</li>
                            <li>Hayalinizdeki laboratuarda/araştırmada yer alma fırsatı,</li>
                            <li>Kariyer planlamanızda önemli bir deneyim elde etme fırsatları </li>

                        </ul>

                        sunmaktadır.</p>
                </div>
            </div>
        </>

    );
}

export default Portal;
