import AgregarProductos from './AgregarProductos'
import TablaProductos from './TablaProductos'
import IProductos from '../../interfaces/IProductos.ts'
const Productos: React.FC = () => {
  const lstProductos: IProductos[] = [
    { nombre: 'Producto 1', precio: 0.5 },
    { nombre: 'Producto 2', precio: 1 },
    { nombre: 'Producto 3', precio: 1.5 },
  ]
  return (
    <div>
      <AgregarProductos />
      <TablaProductos listaProductos={lstProductos} />
    </div>
  )
}
export default Productos
