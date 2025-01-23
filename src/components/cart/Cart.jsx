import React from 'react'
import './Cart.css'
import { ShoppingCart } from 'phosphor-react'

export const Cart = () => {
    return (
        <div className="lista-compra">
            <ShoppingCart className='cart' size={20} color="white" weight="bold" />
            <span className='cart-status'>1</span>
        </div>
    )
}
