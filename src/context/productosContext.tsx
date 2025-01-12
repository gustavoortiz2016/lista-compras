import { createContext, useState, ReactNode } from 'react'
import IProductos from '../interfaces/IProductos'

export const ProductosContext = createContext<{
  lstProductos: IProductos[]
  setLstProductos: React.Dispatch<React.SetStateAction<IProductos[]>>
}>({
  lstProductos: [],
  setLstProductos: () => {},
})

export const ProductosProvider = ({ children }: { children: ReactNode }) => {
  const [lstProductos, setLstProductos] = useState<IProductos[]>([])
  return (
    <ProductosContext.Provider value={{ lstProductos, setLstProductos }}>
      {children}
    </ProductosContext.Provider>
  )
}
