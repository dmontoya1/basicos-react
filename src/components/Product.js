import React, {Component} from 'react';

const Product = ({products, prod, cart, addProduct}) => {
  
  // agregar prod to carrito
  const addProdToCart = id => {
    const prod = products.filter(prod => prod.id === id)[0];
    addProduct([
      ...cart,
      prod
    ]);
  }
  
  // Eliminar producto del carrito
  const deleteProdCart = id => {
    const prods = cart.filter(prod => prod.id !== id);
    addProduct(prods);
  }
  
  const { name, id, price } = prod;
  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
      
      { products
      ? (
          <button
            type="button"
            onClick={() => addProdToCart(id)}
          >
            Comprar
          </button>
        )
      : (
          <button
            type="button"
            onClick={() => deleteProdCart(id)}
          >
            Eliminar
          </button>
        )
        
      }
    </div>
  )
}

export default Product;