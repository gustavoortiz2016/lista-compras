import { createContext, useState, useContext, ReactNode } from 'react'
import IProductos from '../interfaces/IProductos'

interface IProductosContext {
  lstProductos: IProductos[]
  setLstProductos: React.Dispatch<React.SetStateAction<IProductos[]>>
}

const defaultProductosContext: IProductosContext = {
  lstProductos: [],
  setLstProductos: () => {},
}

const ProductosContext = createContext(defaultProductosContext)

export const useProductos = () => {
  const context = useContext(ProductosContext)
  if (context === undefined) {
    throw new Error('useProductos must be used within a ProductosProvider')
  }
  return context
}

const ProductosProvider = ({ children }: { children: ReactNode }) => {
  const [lstProductos, setLstProductos] = useState<IProductos[]>([
    { id: 's', nombre: 'test', precioSugerido: 15 },
  ])
  return (
    <ProductosContext.Provider value={{ lstProductos, setLstProductos }}>
      {children}
    </ProductosContext.Provider>
  )
}
export default ProductosProvider
