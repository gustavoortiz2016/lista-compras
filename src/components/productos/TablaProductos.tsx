import React, { useState, useEffect } from 'react'
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
    <table>
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
              <td>$ {producto.precio}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TablaProductos
