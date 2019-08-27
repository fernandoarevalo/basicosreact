import React, { Fragment } from 'react';

function App() {

  const empleado = {
    nombre: 'Juan Pablo',
    trabajo: 'Desarrollador Web'
  }

  return (
    // <div className="App">
    //   <h1>Hola Mundo!</h1>
    // </div>

    // Without JSX
    // React.createElement(
    //   'h1',
    //   {id: 'heading', className: 'heading'},
    //   'Hola Mundo'
    // )

    // With JSX
    <Fragment>
      <h1>{empleado.nombre}</h1>
      <h1>{empleado.trabajo}</h1>
    </Fragment>
  );
}

export default App;