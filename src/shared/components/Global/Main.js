import Icon5 from '../Img/iconPortatil5.png';
import Icon6 from '../Img/iconPortatil6.png';
import Icon7 from '../Img/iconPortatil7.png';
import Icon8 from '../Img/iconPortatil8.png';

function Main() {
  return (
    <div>
      
      <div className='main3'>
        <h2> Perguntas frequentes:</h2>
        <div className='divMain3'>
          <a href="#">Roubo e furto <span>+</span></a>
          <a href="#">Sinistro<span>+</span></a>
          <a href="#">Danos a terceiros<span>+</span></a>
          <a href="#">Carro reserva<span>+</span></a>
        </div>
      </div>
      <div className='main4'>
        <div className='txtMain4'>
          <h2><strong>E por que contratar seu seguro com a gente?</strong></h2>
          <hr />
          <p >O <strong>Mais Seguro</strong> é oferecido pela <strong>O'DOr Consultoria</strong>, especialista em seguros e benefícios. </p>
          <p >Além do selo Rede DOr de qualidade, você conta com condições especiais na contratação:</p>
        </div>
        <section className='section4'>
          <div className='sec4'>
            <div className='divIcons1' >
              <div className='icons1'>
                <img className='imgMain4' src={Icon5}></img>
              </div>
              <p className='pMain4'>Valores diferenciados</p>
            </div>
            <div className='divIcons1'>
              <div className='icons1'>
                <img className='imgMain4' src={Icon6}></img>
              </div>
              <p className='pMain4'>Suporte garantido em cada etapa</p>
            </div>
          </div>
          <div className='sec4'>
            <div className='divIcons1'>
              <div className='icons1'>
                <img className='imgMain4' src={Icon7}></img>
              </div>
              <p className='pMain4'>Área dedicada a sinistros</p>
            </div>
            <div className='divIcons1'>
              <div className='icons1'>
                <img className='imgMain4' src={Icon8}></img>
              </div>
              <p className='pMain4'>Benefícios extensíveis para sua família</p>
            </div>
          </div>
        </section>
      </div>

    </div>

  );
}

export default Main;