import React from "react";
import './cart.css'
import Product from "./Product";

const Carrito = ({cart, addProduct}) => (
  <div className="cart">
    <h3>Carrito de compras</h3>
    { cart.length === 0
      ? <p>No hay elementos</p>
      : cart.map(prod => (
        <Product
          key={prod.id}
          prod={prod}
          cart={cart}
          addProduct={addProduct}
        />
      ))
    }
  </div>
)

export default Carrito;