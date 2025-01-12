import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import IProductos from '../../interfaces/IProductos.ts'

interface TablaProductosProps {
  listaProductos: IProductos[]
}

const TablaProductos: React.FC<TablaProductosProps> = ({ listaProductos }) => {
  const [productos, setProductos] = useState<IProductos[]>(listaProductos)
  useEffect(() => {
    setProductos(listaProductos)
  }, [listaProductos])

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => {
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
