import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { jwtDecode } from "jwt-decode";
import Title from "../components/Title";
import ThemeButton from "../components/ThemeButton";
import MenuButton from "../components/MenuButton";

type TokenPayLoad = {
    id: string,
    role: string,
    iat: number,
    exp: number
}

type User = {
    username: string;
    email: string;
    theme: string;
}

export default function Home() {
    const [user, setUser] = useState<User | null>(null);
    const [role, setRole] = useState("");
    const context = useContext(ThemeContext);
    const theme = context?.theme;
    const toggleTheme = context?.toggleTheme;
    const actualTheme = theme === "auto" ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light") : theme;
    const navigate = useNavigate()

    useEffect(() => {
        async function getResponse() {
            try {
                const token = localStorage.getItem("token")

                if(!token) { navigate("/login"); return; }

                const response = await fetch("http://localhost:8080/usuario", {
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": `Bearer ${token}`
                    }
                });

                const data = await response.json();
                setUser(data);

                if(data.theme && toggleTheme) {
                    toggleTheme(data.theme)
                }

                const decoded = jwtDecode<TokenPayLoad>(token);
                
                setRole(decoded.role);
            }
            catch {
                navigate("/login")
            }
        }
        getResponse();
    }, []);

    return(
        <>
            <section className="flex flex-col justify-center items-center h-screen gap-5">
                <Title>OLÁ, {user?.username.toUpperCase() ?? ""}!</Title>
                <span className="text-[#888] text-[12px] font-display italic md:text-[20px]">
                    Nesta página, você consegue alterar o seu tema de tela
                </span>
                <div className={`flex flex-col w-[250px] rounded-md border border-[#888] md:w-[400px] md:rounded-lg
                    ${actualTheme === "dark" ? "bg-[#1A1A1A]" : "bg[#EAEAEA]"}`}>
                    <ThemeButton newTheme="light" text="Tema Claro"/>
                    <ThemeButton newTheme="dark" text="Tema Escuro"/>
                    <ThemeButton newTheme="auto" text="Tema Automático"/>
                </div>
                {role === "admin" ?
                    <span className="text-[#888] text-[12px] font-display italic md:text-[16px]">
                        Você é um administrador e consegue gerenciar usuários
                    </span>
                : ""}
                <span className="text-[#888] text-[12px] font-display italic md:text-[20px]">
                    Seu tema atual é {theme == "auto" ? "Automático" : theme == "dark" ? "Escuro" : "Claro"}
                </span>
            </section>
            <section className="fixed bottom-5 left-3 flex flex-col gap-3">
                {role == "admin" ? <MenuButton>USUÁRIOS</MenuButton> : ""}
                <MenuButton>EDITAR DADOS</MenuButton>
                <MenuButton red onClick={() => navigate("/login")}>SAIR</MenuButton>
                <MenuButton red>APAGAR CONTA</MenuButton>
            </section>
        </>
)}