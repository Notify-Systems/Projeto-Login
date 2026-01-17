import Title from "../components/Title"
import DataBox from "../components/DataBox"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()
    return (
        <>
            <section className="flex flex-col justify-center items-center h-screen gap-5"> {/*centralizando a div*/}
                <Title text="FAÇA SEU LOGIN" /> {/*adicionando o título em forma de componente*/}
                <DataBox type="email" placeholder="E-mail" />
                <DataBox type="password" placeholder="Senha" />
                <button type="button" onClick={() => navigate("/home")} className="w-[200px] h-[50px] rounded-lg border border-[#888] text-[25px] font-bold font-display transition duration-700 hover:text-blue-600">ENTRAR</button>
                <span className="text-[#888] font-display italic">Ainda não é cadastrado? <a href="" className="text-[#888] hover:underline hover:underline-gray-700 hover:text-gray-700 font-display">Faça seu cadastro</a></span>
            </section>
        </>
    )
}