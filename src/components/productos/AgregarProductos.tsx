// Componete para agregar productos
import _ from 'lodash'
import { Button, Stack } from 'react-bootstrap'
import useIdiomaContext from '../../context/idiomaContext.tsx'
import { useProductos } from '../../context/productosContext.tsx'

const AgregarProductos: React.FC = () => {
  const { data: idiomaData } = useIdiomaContext()
  const { lstProductos } = useProductos()

  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <div className="p-2">
          {_.get(idiomaData, 'producto.totalProductos')} :{lstProductos.length}
        </div>
        <div className="p-2 ms-auto"></div>
        <div className="p-2">
          <Button variant={'primary'}>
            {_.get(idiomaData, 'producto.agregar')}
          </Button>
        </div>
      </Stack>
    </>
  )
}
export default AgregarProductos
