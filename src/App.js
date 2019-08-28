import React, { Fragment } from 'react';
import Header from "./components/Header";
import ListaProductos from "./components/ListaProductos";
import Footer from "./components/Footer";

function App() {

  return (
    <Fragment>
      <Header 
        titulo="Tienda Virtual"
      />

      <ListaProductos />

      <Footer />
    </Fragment>
  );
}

export default App;