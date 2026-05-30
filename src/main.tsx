import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css'
import { ThemeProvider } from './context/ThemeContext.tsx';
import App from './App.tsx'
import Login from "./pages/Login";
import Register from "./pages/Register"
import Home from './pages/Home.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode> 
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}> {/*caminho até a página. A barra representa onde tudo começa*/}
            <Route index element={<Navigate to="/login" replace />} />
            <Route path='home' element={<Home />}/>
            <Route path="login" element={<Login />} /> {/*interligação de páginas*/}
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
