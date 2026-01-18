import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Title from "../components/Title";
import ThemeButton from "../components/ThemeButton";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const context = useContext(ThemeContext);
    const theme = context?.theme;
    const actualTheme = theme === "auto" ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light") : theme;
    const navigate = useNavigate()

    return(
        <>
            <section className="flex flex-col justify-center items-center h-screen">
                <Title text="ESTA É A PÁGINA PRINCIPAL"/>
                <span className="text-[#888] text-[20px] mb-[20px] font-display italic">Nesta página, você consegue alterar o seu tema de tela</span> 
                <div className={`flex flex-col w-[500px] rounded-lg border border-[#888]
                    ${actualTheme === "dark" ? "bg-[#1A1A1A]" : "bg[#EAEAEA]"}`}>
                    <ThemeButton newTheme="light" text="Tema Claro"/>
                    <ThemeButton newTheme="dark" text="Tema Escuro"/>
                    <ThemeButton newTheme="auto" text="Tema Automático"/>
                </div>
            </section>
            <section className="fixed bottom-5 left-3 flex flex-col gap-3">
                <button
                    type="button"
                    className={`w-[221px] h-[50px] rounded-lg border text-[25px] font-bold font-display transition duration:300
                    ${actualTheme == "dark" ? "text-white border-white hover:bg-[#1A1A1A]" : "text-black border-black hover:bg-[#EAEAEA]"}`}>
                    EDITAR DADOS
                </button>
                
                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className={`text-red-500 w-[221px] h-[50px] rounded-lg border border-[red] text-[25px] font-bold font-display 
                    ${actualTheme == "dark" ? "hover:text-[#FF5454] hover:border-[#FF5454]" : "text-black border-black hover:bg-[#EAEAEA]"}`}>
                    SAIR
                </button>
                
                <button 
                    type="button" 
                    className={`w-[221px] h-[50px] rounded-lg border border-[red] text-[25px] font-bold font-display text-red-500 
                    ${actualTheme == "dark" ? "hover:text-[#FF5454] hover:border-[#FF5454]" : "text-black border-black hover:bg-[#EAEAEA]"}`}>
                    APAGAR CONTA
                </button>
            </section>
        </>
)}