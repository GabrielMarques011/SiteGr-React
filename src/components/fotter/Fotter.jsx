import React from 'react'
import './Fotter.css'

import insta from '../../img/InstagramCircle.png';
import telefone from '../../img/TelefoneCircle.png';

export const Fotter = () => {
  return (
    <div className="fotter">
        
        <div class="fotter-text"> 
            <img class="insta" src={insta} alt="Instragram" />
            <p>designers_gr</p>
        </div>

        <div class="fotter-text"> 
            <img class="tel" src={telefone} alt="Telefone" />
            <p>(11) 99811-5496</p>
        </div>
        
    </div>
  )
}
