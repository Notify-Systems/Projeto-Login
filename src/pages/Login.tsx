import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import NProgress from "nprogress"
import "nprogress/nprogress.css";
import Title from "../components/Title"
import Input from "../components/Input"
import Submit from "../components/Submit";

export default function Login() {
    const navigate = useNavigate();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState("");

    async function login() {
        const email = emailRef.current?.value ?? "";
        const password = passwordRef.current?.value ?? "";

        NProgress.start();
        const response = await fetch("http://localhost:8080/usuario/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": ""
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        });

        const data = await response.json();

        NProgress.done()
        if(response.status == 200) {
            localStorage.setItem("token", data.token)
            navigate("/home");
        }
        else {
            setError(data.message);
        }
    }

    return (
        <>
            <section className="flex flex-col justify-center items-center h-screen gap-4 md:gap-5"> {/*centralizando a div*/}
                <Title>FAÇA SEU LOGIN</Title>
                <Input inputRef={emailRef} type="email" placeholder="E-mail" />
                <Input inputRef={passwordRef} type="password" placeholder="Senha" />
                <span className="text-[#FF0000]">{error}</span>
                <Submit onClick={() => login()}>ENTRAR</Submit>
                <span className="text-[#888] font-display italic text-[12px] md:text-[16px]">Ainda não é cadastrado? 
                    <Link to="/register"
                    className="text-[#888] hover:underline hover:underline-gray-700 hover:text-gray-700 font-display ml-1">
                        Faça seu cadastro
                    </Link>
                </span>
            </section>
        </>
    )
}