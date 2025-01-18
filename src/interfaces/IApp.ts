export interface ILoginLenguaje {
  titulo: string
  usuario: string
  contrasena: string
  boton: string
  recuerdame: string
  error: {
    usuario: string
    contrasena: string
    credenciales: string
  }
}
export interface IListaIdiomas {
  titulo: string
  lista: {
    codigo: string
    nombre: string
  }[]
}
export default interface IApp {
  nombreApp: string
  version: string
  titulo: string
  subtitulo: string
  bienvenido: string
  descripcion: string
  login: ILoginLenguaje
  listaIdiomas: IListaIdiomas
}
