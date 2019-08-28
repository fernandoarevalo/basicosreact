import React, { Component, Fragment } from "react";
import Producto from "./Producto";

class ListaProductos extends Component {
    state = {
        productos : [
            { id: 1, nombre: 'Camisa ReactJS', precio: 30},
            { id: 2, nombre: 'Camisa AngularJS', precio: 30},
            { id: 3, nombre: 'Camisa VueJS', precio: 30},
            { id: 4, nombre: 'Camisa Node.JS', precio: 30}
        ]
    }
    render() {
        const {productos} = this.state;
        console.log(productos);

        return(
            <Fragment>

            <h1>Lista de Productos</h1>
            {productos.map(producto => (
                <Producto 
                    key={producto.id}
                    producto={producto}
                /> 
            ))}
            </Fragment>
        );
    }
}

export default ListaProductos;