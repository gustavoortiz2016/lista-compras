interface IProductos {
  id?: string
  nombre: string
  precioSugerido: number
  descripcion?: string
  activo?: boolean
  medida?: IMedida
}

interface IMedida {
  id?: string
  nombre: string
  descripcion?: string
  activo?: boolean
}

export default IProductos
export type { IMedida }
