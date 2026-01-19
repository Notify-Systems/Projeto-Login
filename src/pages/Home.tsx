import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import ThemeButton from "../components/ThemeButton";
import MenuButton from "../components/MenuButton";

export default function Home(){
    const context = useContext(ThemeContext);
    const theme = context?.theme;
    const actualTheme = theme === "auto" ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light") : theme;
    const navigate = useNavigate()

    return(
        <>
            <section className="flex flex-col justify-center items-center h-screen">
                <Title text="ESTA É A PÁGINA PRINCIPAL"/>
                <span className="text-[#888] text-[12px] mb-4 font-display italic md:text-[20px] md:mb-5"
                    >Nesta página, você consegue alterar o seu tema de tela
                </span>
                <div className={`flex flex-col w-[250px] rounded-md border border-[#888] md:w-[500px] md:rounded-lg
                    ${actualTheme === "dark" ? "bg-[#1A1A1A]" : "bg[#EAEAEA]"}`}>
                    <ThemeButton newTheme="light" text="Tema Claro"/>
                    <ThemeButton newTheme="dark" text="Tema Escuro"/>
                    <ThemeButton newTheme="auto" text="Tema Automático"/>
                </div>
                <span className="text-[#888] text-[12px] mt-4 font-display italic md:text-[20px] md:mt-5">
                    Seu tema atual é {theme == "auto" ? "Automático" : theme == "dark" ? "Escuro" : "Claro"}
                </span>
            </section>
            <section className="fixed bottom-5 left-3 flex flex-col gap-3">
                <MenuButton text="EDITAR DADOS" />
                <MenuButton text="SAIR" red onClick={() => navigate("/")} />
                <MenuButton text="APAGAR CONTA" red />
            </section>
        </>
)}