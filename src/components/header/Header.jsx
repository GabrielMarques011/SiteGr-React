import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import minhaImagem from '../../img/image.png';
import { Cart } from '../cart/Cart';



export const Header = () => {
  return (
    <div className='header'>
      <div class="header-logo">
        <img src={minhaImagem} alt="LogoGR" />
      </div>

      <div class="link">

        <div className="navs">
          <NavLink to="/">Inicio</NavLink>
          <a href="/#sobre">Sobre</a>
          <NavLink to="/catalogo">Catalogo</NavLink>
        </div>

        <NavLink to="/compra"><Cart /></NavLink>

      </div>

    </div>
  )
}
