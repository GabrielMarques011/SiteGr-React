import React from 'react'
import { Header } from '../components/header/Header'
import { Produtos } from '../components/produtos/Produtos'
import { Fotter } from '../components/fotter/Fotter'
import { Carrossel } from '../components/carrossel/Carrossel'

export const Catalogo = () => {

  const slides = [
    '../../src/img/entregaEncomenda.jpg',
    '../../src/img/entrega.jpg',
    '../../src/img/entregaEncomenda.jpg',
    '../../src/img/entregaEncomenda.jpg',
    '../../src/img/entregaEncomenda.jpg',
  ];

  return (
    <div className="catalogo">

      <Header />

      <div className="inicio-catalogo">
        <div className="box-catalogo">
          <h2>CATALOGO DE PRODUTOS</h2>
          <p>VENHA REALIZAR O SEU ORÇAMENTO CONOSCO</p>
        </div>
      </div>

      <Carrossel slides={slides} />

      <p className='description-principal'>Lista de Produtos</p>
      <p className='description'>Adicione os itens no carrinho e faça seu orçamento</p>

      <Produtos />

      <Fotter />

    </div>
  )
}
