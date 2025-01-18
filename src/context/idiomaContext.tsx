import React, { createContext, useContext, useState, useEffect } from 'react'
import _ from 'lodash'

import IApp from '../interfaces/IApp'
import idiomaData from '../assets/idiomas/idiomas.json'

interface IIdiomaContext {
  data: IApp
  idioma: string
  setIdioma: (idioma: string) => void
  setData: (data: IApp) => void
}

const defaultIdiomaData: IApp = {
  nombreApp: '',
  version: '',
  titulo: '',
  subtitulo: '',
  bienvenido: '',
  descripcion: '',
  login: {
    titulo: '',
    usuario: '',
    contrasena: '',
    boton: '',
    recuerdame: '',
    error: {
      usuario: '',
      contrasena: '',
      credenciales: '',
    },
  },
  listaIdiomas: {
    titulo: '',
    lista: [],
  },
}

const defaultContext: IIdiomaContext = {
  data: defaultIdiomaData,
  idioma: '',
  setIdioma: () => {},
  setData: () => {},
}

const idiomaContext = createContext<IIdiomaContext>(defaultContext)

export const IdiomaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [idioma, setIdioma] = useState('es-sv')
  const [data, setData] = useState<IApp>(defaultIdiomaData)

  return (
    <idiomaContext.Provider value={{ data, idioma, setIdioma, setData }}>
      {children}
    </idiomaContext.Provider>
  )
}

const useIdiomaContext = () => {
  const context = useContext(idiomaContext)

  if (context === undefined)
    throw new Error('useIdiomaContext must be used within a IdiomaProvider')

  const { setData, setIdioma, idioma } = context

  useEffect(() => {
    setIdioma('es-sv')
  }, [])

  useEffect(() => {
    console.log('useEffect', idiomaData)
    setData(_.get(idiomaData, idioma, defaultIdiomaData))
  }, [idioma])

  return context
}

export default useIdiomaContext
