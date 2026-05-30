import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom"
import Swal from "sweetalert2";
import Title from "../components/Title"
import Input from "../components/Input"
import Submit from "../components/Submit";

export default function Register() {
    const navigate = useNavigate();
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmRef = useRef<HTMLInputElement>(null);

    async function register() {
        const name = nameRef.current?.value ?? "";
        const email = emailRef.current?.value ?? "";
        const password = passwordRef.current?.value ?? "";
        const confirm = confirmRef.current?.value ?? "";
        
        if(name.trim() && email.trim() && password.trim() && confirm.trim() && emailRef.current?.checkValidity() && password == confirm) {
            await fetch("http://localhost:8080/usuario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    confirmPassword: confirm
                }),
            })
            .then((response) => response.json())
            .then((data)=> console.log(data))
            .then(() => {
                Swal.fire({
                    title: "Registrado com sucesso!",
                    icon: "success",
                    theme: "dark"
                }).then(() => navigate("/home"))
            })
        }
    }

    return (
        <section className="flex flex-col justify-center items-center h-screen gap-4 md:gap-5"> {/*centralizando a div*/}
            <Title text="REGISTRE-SE" /> {/*adicionando o título em forma de componente*/}
            <Input inputRef={nameRef} placeholder="Nome de usuário" />
            <Input inputRef={emailRef} type="email" placeholder="E-mail" />
            <Input inputRef={passwordRef} type="password" placeholder="Senha" />
            <Input inputRef={confirmRef} type="password" placeholder="Confirmar senha" />
            <Submit onClick={() => register()}>REGISTRAR</Submit>
            <span className="text-[#888] font-display italic text-[12px] md:text-[16px]">Já possui uma conta? 
                <Link to="/login"
                className="text-[#888] hover:underline hover:underline-gray-700 hover:text-gray-700 font-display ml-1">
                    Faça seu login
                </Link>
            </span>
        </section>
    )
}