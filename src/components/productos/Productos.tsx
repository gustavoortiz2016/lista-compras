import React, { useState } from 'react'
import AgregarProductos from './AgregarProductos'
import TablaProductos from './TablaProductos'
import ProductosProvider from '../../context/productosContext'

const Productos: React.FC = () => {
  return (
    <ProductosProvider>
      <AgregarProductos />
      <TablaProductos />
    </ProductosProvider>
  )
}
export default Productos
