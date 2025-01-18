import React, { createContext, useContext, useState, useEffect } from 'react'

interface IThemeContext {
  theme: string
  setTheme: (theme: string) => void
}

const defaultContext: IThemeContext = {
  theme: '',
  setTheme: () => {},
}

const themeContext = createContext(defaultContext)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState('')

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  )
}

const useThemeContext = () => {
  const context = useContext(themeContext)

  useEffect(() => {
    context.setTheme('dark')
  }, [])

  if (!context) {
    throw new Error('useThemeContext debe ser usado dentro de un ThemeProvider')
  }

  return context
}

export default useThemeContext
