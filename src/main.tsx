import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import PageLogin from "./components/pages/login/index.tsx";

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<PageLogin />} />
      </Routes>
    </BrowserRouter>
  );