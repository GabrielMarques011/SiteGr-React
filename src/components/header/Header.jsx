import React from 'react'
import minhaLogo from '../../img/image.png';
import './Header.css'

export const Header = () => {
  return (
    <div className='header'>
        <div class="header-logo">
            <img src={minhaLogo} alt="LogoGR"/>
        </div>

        <div class="link">
            <a href="">Início</a>
            <a href="">Sobre</a>
            <a href="">Catálogo</a>
        </div>
    </div>
  )
}
