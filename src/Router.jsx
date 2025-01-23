import React from 'react'

import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Catalogo } from './pages/Catalogo';
import { CartItem } from './components/cartItem/CartItem';

export const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/catalogo' element={<Catalogo />}/>
        <Route path='/compra' element={<CartItem />}/>
    </Routes>
  )
}
