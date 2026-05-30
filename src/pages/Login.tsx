import { useNavigate, Link } from "react-router-dom"
import Title from "../components/Title"
import Input from "../components/Input"
import Submit from "../components/Submit";

export default function Login() {
    const navigate = useNavigate()

    return (
        <>
            <section className="flex flex-col justify-center items-center h-screen gap-4 md:gap-5"> {/*centralizando a div*/}
                <Title text="FAÇA SEU LOGIN" /> {/*adicionando o título em forma de componente*/}
                <form className="flex flex-col items-center gap-4 md:gap-5">
                    <Input type="email" placeholder="E-mail" />
                    <Input type="password" placeholder="Senha" />
                    <Submit onClick={() => navigate("/")} value="ENTRAR" />
                </form>
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