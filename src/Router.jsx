import React from 'react'

import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Catalogo } from './pages/Catalogo';

export const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/catalogo' element={<Catalogo />}/>
    </Routes>
  )
}
