import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import Login from "./pages/Login";

createRoot(document.getElementById('root')!).render(
  <StrictMode> 
    <HashRouter>
        <Routes>
          <Route path="/" element={<App />}> {/*caminho até a página. A barra representa onde tudo começa*/}
            <Route index element={<Login />} /> {/*interligação de páginas*/}
          </Route>
        </Routes>
      </HashRouter>
  </StrictMode>,
)
