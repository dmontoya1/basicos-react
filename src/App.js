import React, {Fragment, useState} from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Carrito from "./components/Cart";

function App() {
  
  // Crear listado de Productos (Hooks)
  const [ products, setProducts] = useState([
    {id: 1, name: "Camisa ReactJS", price: 50},
    {id: 2, name: "Camisa VueJS", price: 40},
    {id: 3, name: "Camisa Node.JS", price: 30},
    {id: 4, name: "Camisa Angular", price: 20},
  ]);
  
  // State para Carrito de compras
  
  const [cart, addProduct] = useState([]);
  
  // Obtener Fecha
  const date = new Date().getFullYear();
  return (
    <div className="App">
      <Header title="Tienda Virtual" />
      <h2>Lista de Productos</h2>
      {products.map(prod => (
        <Product
          key={prod.id}
          prod={prod}
          cart={cart}
          products={products}
          addProduct={addProduct}
        />
      ))}
      <Carrito
        cart={cart}
        addProduct={addProduct}
      />
      <Footer date={date} />
    </div>
  );
}

export default App;
