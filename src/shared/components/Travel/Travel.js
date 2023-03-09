import React from 'react';
import BackImgPortatil from '../Img/backImgTravel.jpg';
import ButtonSeguro from '../Img/buttonSeguro3.png';
import Icon from '../Img/icon.png';
import Icon1 from '../Img/iconTravel1.png';
import Icon2 from '../Img/iconTravel2.png';
import Icon3 from '../Img/iconTravel3.png';
import Icon4 from '../Img/iconTravel4.png';
import NavBar from '../Global/NavBar';
import Navegation from '../Travel/Navegation';
import Footer from '../Global/Footer';
import Main from '../Global/Main';
import "../style/index.css";


function Travel() {
  return (
    <div>
      <NavBar></NavBar>
      <Navegation></Navegation>
      <div className='main1 travel'>
        <section className='section1'>
          <div className='divImgBack'>
            <img className='backImg' src={BackImgPortatil} />
          </div>
          <div className='dscBack'>
            <div className='divC'>
              <img className='buttonSeguro' src={ButtonSeguro} />
              <img className='icon' src={Icon} />
            </div>

            <h2 className='portatilTitle'>VIAGEM</h2>
            <p className='portatilDsc'>Tranquilidade sem fronteiras</p>
            <hr />
            <p className='portatilText'>A lazer ou a trabalho, o melhor roteiro começa aqui.</p>
            <button className='compareButton'>COMPARE SEGUROS</button>

          </div>
        </section>
      </div>
      <div className='main2'>
        <div className='divTitle2'>
          <p className='p'>Coberturas e assistências:</p>
        </div>
        <section className='section2'>
          <div className='divSec'>
            <div className='divIcons' >
              <div className='icons travel'>
                <img className='imgIcons' src={Icon1}></img>
              </div>
              <p className='p1'>Danos por raios, oscilações e descargas elétricas, incêndios ou explosões</p>
            </div>
            <div className='divIcons'>
              <div className='icons travel'>
                <img className='imgIcons' src={Icon2}></img>
              </div>
              <p className='p1'>Furto mediante rompimento de obstáculo ou ameaça direta*</p>
            </div>
          </div>
          <div className='divSec'>
            <div className='divIcons'>
              <div className='icons travel'>
                <img className='imgIcons' src={Icon3}></img>
              </div>
              <p className='p2'>Danos por conta de água ou outros líquidos</p>
            </div>
            <div className='divIcons'>
              <div className='icons travel'>
                <img className='imgIcons' src={Icon4}></img>
              </div>
              <p className='p2'>Disponível no Brasil e no exterior</p>
            </div>
          </div>
        </section>
        <div>
          <hr className='hr'></hr>
          <div className='alert'>
            <p>*Exceto quando deixado em veículos</p>
          </div>
        </div>
      </div>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default Travel;