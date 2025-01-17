import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import PageLogin from "./components/pages/login/index.tsx";
import PageMaestroProductos from "./components/pages/maestros/productos/index.tsx";
import { AppProvider } from './context/appContext';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<PageLogin />} />
        <Route path="maestroproductos" element={<PageMaestroProductos />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);