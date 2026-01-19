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
                w-[300px] px-3 py-2 border border-gray outline-none rounded-md text-[12px] font-display
                md:w-[500px] md:text-[15px] md:rounded-lg md:px-4
                ${actualTheme === "dark" ? "text-white" : "text-black"}
            `}/>
        </>
    )
}