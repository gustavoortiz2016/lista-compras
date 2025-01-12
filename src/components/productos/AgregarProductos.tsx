// Componete para agregar productos
import React, { useId, useState, useContext, useEffect } from 'react'

import { ProductosContext } from '../../context/productosContext'
import IProductos from '../../interfaces/IProductos'

const AgregarProductos: React.FC = () => {

  const txtNombreProductoId = useId()
  const txtPrecioProductoId = useId()

  const {setLstProductos} = useContext(ProductosContext)

  const [producto, setProducto] = useState<IProductos>({
    nombre: '',
    precioSugerido: 0,
  })

  useEffect(() => {

  }, [producto])

  return (
    <>
      <div>
        <label htmlFor={txtNombreProductoId}>Nombre Producto: </label>
        <input
          type="text"
          id={txtNombreProductoId}
          placeholder="Ingresa el nombre del producto"
          defaultValue={producto.nombre}
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
            setProducto({...producto, nombre: (e.target as HTMLInputElement).value})
          }}
        />
      </div>
      <div>
        <label htmlFor={txtPrecioProductoId}>Precio Producto: </label>
        <input
          type="number"
          id={txtPrecioProductoId}
          min={0.5}
          max={100}
          step={0.5}
          defaultValue={producto.precioSugerido}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setProducto({...producto, precioSugerido: parseFloat((e.target as HTMLInputElement).value)})
          }}
        />
      </div>
      <div>
        <button onClick={() => agregarProducto()}>Agregar Producto</button>
      </div>
    </>
  )
}
export default AgregarProductos
