import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import minhaImagem from '../../img/image.png';

export const Header = () => {
  return (
    <div className='header'>
        <div class="header-logo">
            <img src={minhaImagem} alt="LogoGR"/>
        </div>

        <div class="link">
            <a href="">Início</a>
            <a href="">Sobre</a>
            <NavLink to="catalogo">Catalogo</NavLink>
        </div>
    </div>
  )
}
