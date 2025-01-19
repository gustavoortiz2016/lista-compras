import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App'
import Layout from './components/pages/layout/Layout'
import PageLogin from './components/pages/login/index.tsx'
import PageMaestroProductos from './components/pages/maestros/productos/index.tsx'
import { IdiomaProvider } from './context/idiomaContext'
import { ThemeProvider } from './context/themeContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <IdiomaProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="login" element={<PageLogin />} />
            <Route
              path="maestroproductos"
              element={
                <Layout>
                  {' '}
                  <PageMaestroProductos />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </IdiomaProvider>
  </>
)
