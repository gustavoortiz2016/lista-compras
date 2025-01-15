import React, { useState, useEffect,useContext } from 'react'
import { Table } from 'react-bootstrap'
import IProductos from '../../interfaces/IProductos.ts'
import { ProductosContext} from '../../context/productosContext.tsx'

const TablaProductos: React.FC = () => {

  const {lstProductos: listaProductos} = useContext(ProductosContext)

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {listaProductos.map((producto: IProductos) => {
          return (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>$ {producto.precioSugerido}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default TablaProductos
