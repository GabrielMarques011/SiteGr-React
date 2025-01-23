import React from 'react'
import './CartItem.css'
import { Header } from '../header/Header'
import { MapPin, Trash } from 'phosphor-react'

import bloco from '../../img/bloco.jpg'

export const CartItem = () => {
    return (

        <div className="cart-item">

            <Header />

            <div className="itens-lista">

                <div className="cliente-endereco">

                    <h2>Complete o seu pedido conosco!</h2>

                    <div className="endereco-cart">

                        <div className="text-endereco">
                            <MapPin size={26} color="#352653" weight="bold" />
                            <h2>Endereço de Entrega</h2>
                            <p>Informe o endereço aonde deseja receber o seu pedido</p>
                        </div>

                        <form action="">
                            <input type="text" id="cep" name="cep" placeholder='CEP' required />
                            <input type="text" id="endereco" name="endereco" placeholder='Endereço' required />
                            <input type="text" id="numero" name="numero" placeholder='Numero' required />
                            <input type="text" id="complemento" name="complemento" placeholder='Complemento' />
                            <input type="text" id="cidade" name="cidade" placeholder='Cidade' required />
                            <input type="text" id="bairro" name="bairro" placeholder='Bairro' required />
                            <input type="text" id="uf" name="uf" placeholder='UF' required />
                        </form>

                    </div>

                </div>

                <div className="itens-produtos">
                    <img src={bloco} alt="Img" />
                    <h2>Titulo Produto</h2>
                    <p>R$ 50,00</p>

                    <div className="remove">
                        <button><Trash size={32} color="#b7a3c2" weight="bold" /></button>
                    </div>

                </div>

            </div>

        </div>
    )
}
