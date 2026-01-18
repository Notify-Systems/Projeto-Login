import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

type Props = {
    type: string;
    placeholder: string;
}

export default function DataBox({type, placeholder}: Props){
    const context = useContext(ThemeContext);
    const theme = context?.theme;
    const actualTheme = theme === "auto" ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light") : theme;

    return (
        <>
            <input type={type} placeholder={placeholder} className={`
                w-[500px] px-4 py-2 border border-gray outline-none rounded-lg text-[15px] font-display
                ${actualTheme === "dark" ? "text-white" : "text-black"}
            `}/>
        </>
    )
}