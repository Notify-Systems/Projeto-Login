import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom"
import Title from "../components/Title"
import Input from "../components/Input"
import Submit from "../components/Submit";

export default function Login() {
    const navigate = useNavigate();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    function login() {
        const email = emailRef.current?.value ?? "";
        const password = passwordRef.current?.value ?? "";

        if(email.trim() && password.trim() && emailRef.current?.checkValidity()) {
            navigate("/home");
        }
    }

    return (
        <>
            <section className="flex flex-col justify-center items-center h-screen gap-4 md:gap-5"> {/*centralizando a div*/}
                <Title text="FAÇA SEU LOGIN" /> {/*adicionando o título em forma de componente*/}
                <Input inputRef={emailRef} type="email" placeholder="E-mail" />
                <Input inputRef={passwordRef} type="password" placeholder="Senha" />
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