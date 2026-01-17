import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { Outlet } from "react-router-dom";

export default function App() {
  const context = useContext(ThemeContext);
  const theme = context?.theme;
  const actualTheme = theme === "auto" ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light") : theme;
  
  return (
    <>
      <div className={`w-screen h-screen ${actualTheme == "dark" ? "bg-[image:var(--dark-bg)]" : "bg-[image:var(--light-bg)]"}`}> {/*largura e altura da tela definidas numa div*/}
        <Outlet /> {/*tudo que aparece na tela*/}
      </div>
    </>
  )
}
