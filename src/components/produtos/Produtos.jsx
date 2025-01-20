import React from 'react'
import bloco from '../../img/bloco.jpg';

import '../../components/produtos/Produtos.css'

export const Produtos = () => {
  return (
    <div className="catalogo-produtos">

        <div className="produto">
          <img className='img-catalogo' src={bloco} alt="Bloco" />
          <h2>Produto</h2>
          <p>10cm x 10cm</p>
        </div>

        <div className="produto">
          <img className='img-catalogo' src={bloco} alt="Bloco" />
          <h2>Produto</h2>
          <p>10cm x 10cm</p>
        </div>
        
        <div className="produto">
          <img className='img-catalogo' src={bloco} alt="Bloco" />
          <h2>Produto</h2>
          <p>10cm x 10cm</p>
        </div>

        <div className="produto">
          <img className='img-catalogo' src={bloco} alt="Bloco" />
          <h2>Produto</h2>
          <p>10cm x 10cm</p>
        </div>

    </div>
  )
}
