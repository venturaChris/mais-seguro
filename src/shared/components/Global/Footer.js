import React from 'react';
import logo from '../Img/logo-azul.png';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer1'>
        <div className='imgFooter'>
          <img src={logo}></img>
        </div>
        <hr></hr>
        <div className='txtFooter'>
          <p>Todo o conteúdo aqui apresentado é de propriedade intelectual da DOr Consultoria Seguros e Benefícios. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
   
  );
}

export default Footer;