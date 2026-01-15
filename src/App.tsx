import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="w-screen h-screen"> {/*largura e altura da tela definidas numa div*/}
        <Outlet /> {/*tudo que aparece na tela*/}
      </div>
    </>
  )
}
