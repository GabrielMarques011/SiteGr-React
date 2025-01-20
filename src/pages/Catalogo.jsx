import React from 'react'
import { Header } from '../components/header/Header'
import { Produtos } from '../components/produtos/Produtos'

export const Catalogo = () => {
  return (
    <div className="catalogo">

      <Header />

      <div className="inicio-catalogo">
        <div className="box-catalogo">
          <h2>CATALOGO DE PRODUTOS</h2>
          <p>VENHA REALIZAR O SEU ORÇAMENTO CONOSCO</p>
        </div>
      </div>

      <Produtos />

    </div>
  )
}
