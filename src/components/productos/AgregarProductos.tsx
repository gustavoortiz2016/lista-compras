import React,{ useId } from "react"

import useProductos from "../../hooks/useProductos"


const AgregarProductos = () => {
    const txtNombreProductoId = useId()
    const txtPrecioProductoId = useId()

    const {nombreProducto,precioProducto,setNombreProducto, setPrecioProducto, agregarProducto} = useProductos("Producto 1", .5)


    return (<>
        <div>
            <label htmlFor={txtNombreProductoId}>Nombre Producto: </label>
            <input type="text" id={txtNombreProductoId} placeholder="Ingresa el nombre del producto" defaultValue={nombreProducto} onKeyUp={(e:React.KeyboardEvent<HTMLInputElement>)=>{
                setNombreProducto((e.target as HTMLInputElement).value)}
            } />
        </div>
        <div>
            <label htmlFor={txtPrecioProductoId}>Precio Producto: </label>
            <input type="number" id={txtPrecioProductoId} min={.50} max={100} step={.50} defaultValue={precioProducto}
           onChange={(e:React.ChangeEvent<HTMLInputElement>)=> {
               setPrecioProducto(parseFloat((e.target as HTMLInputElement).value))
           }
           }
            />
        </div>
        <div>
            <button
           onClick={()=>agregarProducto()}
            >Agregar Producto</button>
        </div>
    </>)
}
export default AgregarProductos