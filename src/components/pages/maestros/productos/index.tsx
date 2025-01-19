import _ from 'lodash'
import Productos from '../../../productos/Productos'
import ProductosProvider from '../../../../context/productosContext.tsx'
import useIdiomaContext from '../../../../context/idiomaContext.tsx'
const PageProductos: React.FC = (): React.ReactNode => {
  const { data: idiomaData } = useIdiomaContext()
  console.log('PageProductos', idiomaData)
  return (
    <>
      <h1> {_.get(idiomaData, 'producto.titulo', '')} </h1>
      <ProductosProvider>
        <Productos />
      </ProductosProvider>
    </>
  )
}
export default PageProductos
