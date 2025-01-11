import {useEffect, useState} from "react";

const useProductos = (
    nProducto: string,
    pProducto:number
): {nombreProducto: string, precioProducto: number, setNombreProducto: (value: (((prevState: string) => string) | string)) => void, setPrecioProducto: (value: (((prevState: number) => number) | number)) => void, agregarProducto: () => void}=> {
    const   [nombreProducto, setNombreProducto] = useState("")
    const   [precioProducto, setPrecioProducto] = useState(.5)

    useEffect(() => {
        setNombreProducto(nombreProducto)
        setPrecioProducto(precioProducto)
    }, [nProducto,pProducto]);

    const agregarProducto = () => {
        console.log(`Nombre Producto: ${nombreProducto} Precio Producto: ${precioProducto}`)
        setNombreProducto("")
        setPrecioProducto(.5)
    }

    return {
        nombreProducto,
        precioProducto,
        setNombreProducto,
        setPrecioProducto,
        agregarProducto
    }

}

export default useProductos
