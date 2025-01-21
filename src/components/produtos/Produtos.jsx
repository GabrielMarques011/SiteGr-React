import React from 'react'
import bloco from '../../img/bloco.jpg'
import { products } from '../../data.json'

import { ShoppingCart } from "phosphor-react";

import '../../components/produtos/Produtos.css'

export const Produtos = () => {
  return (
    <div className="catalogo-produtos">

      {products.map((product) => (

        <div className="produto">
          <img className='img-catalogo' src={bloco} alt="Bloco" />
          <div className="text-catologo">
            <h2>{product.title}</h2>
            <p>{product.descripition}</p>
            
            <button><ShoppingCart size={20} color="#fcfcfc" weight="bold" />Adicionar</button>
          </div>
        </div>

      ))}

    </div>
  )
}
