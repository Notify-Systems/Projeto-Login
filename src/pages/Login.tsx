import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom"
import Title from "../components/Title"
import DataBox from "../components/DataBox"

export default function Login() {
    const context = useContext(ThemeContext);
    const theme = context?.theme;
    const actualTheme = theme === "auto" ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light") : theme;
    const navigate = useNavigate()

    return (
        <>
            <section className="flex flex-col justify-center items-center h-screen gap-5"> {/*centralizando a div*/}
                <Title text="FAÇA SEU LOGIN" /> {/*adicionando o título em forma de componente*/}
                <DataBox type="email" placeholder="E-mail" />
                <DataBox type="password" placeholder="Senha" />
                <button type="button"
                    onClick={() => navigate("/home")}
                    className={`w-[200px] h-[50px] rounded-lg border border-[#888] text-white text-[25px] font-bold font-display
                        transition duration-300
                        ${actualTheme === "dark" ? "bg-[#1A1A1A] hover:bg-[#222] text-white" : "bg-[#EAEAEA] hover:bg-[#E2E2E2] text-black"}`}
                >ENTRAR</button>
                <span className="text-[#888] font-display italic">Ainda não é cadastrado?
                    <a className="text-[#888] hover:underline hover:underline-gray-700 hover:text-gray-700 font-display"> Faça seu cadastro</a>
                </span>
            </section>
        </>
    )
}