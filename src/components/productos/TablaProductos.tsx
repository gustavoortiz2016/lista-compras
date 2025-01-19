import _ from 'lodash'
import { Table } from 'react-bootstrap'
import IProductos from '../../interfaces/IProductos.ts'

import useIdiomaContext from '../../context/idiomaContext.tsx'
import { useProductos } from '../../context/productosContext.tsx'
import TablaAcciones from '../tabla/TablaAcciones.tsx'

const TablaProductos: React.FC = (): React.ReactNode => {
  const { lstProductos } = useProductos()
  const { data: idiomaData } = useIdiomaContext()

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>{_.get(idiomaData, 'producto.producto')}</th>
          <th>{_.get(idiomaData, 'producto.cantidad')}</th>
          <th>{_.get(idiomaData, 'producto.precio')}</th>
          <th>{_.get(idiomaData, 'producto.acciones')}</th>
        </tr>
      </thead>
      <tbody>
        {lstProductos.map((producto: IProductos) => {
          return (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>{producto.medida?.nombre}</td>
              <td>$ {producto.precioSugerido}</td>
              <td>
                <TablaAcciones
                  activo={_.get(idiomaData, 'producto.activo', '')}
                  editar={_.get(idiomaData, 'producto.editar', '')}
                  eliminar={_.get(idiomaData, 'producto.eliminar', '')}
                  estado={true}
                  handleActivo={() => {}}
                  handleEliminar={() => {}}
                  handleEditar={() => {}}
                  key={'ac-' + producto.id}
                />
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default TablaProductos
