import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CartWidget.css'

export const CartWidget = () => {
  return (
    <>
    <div className="logo d-flex ms-2">
      <img src="./src/components/CartWidget/assets/img/cart-icon.png" alt="" srcset="" />
      <div className="number-container">
        <div className="number">3
        </div>
      </div>
    </div>
    </>
  )
}

export default CartWidget;