import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css'
import { ThemeProvider } from './context/ThemeContext.tsx';
import App from './App.tsx'
import Login from "./pages/Login";

createRoot(document.getElementById('root')!).render(
  <StrictMode> 
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}> {/*caminho até a página. A barra representa onde tudo começa*/}
            <Route index element={<Login />} /> {/*interligação de páginas*/}
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </StrictMode>,
)
