import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

type Props = {
    text: string;
    red?: boolean;
    onClick?: () => void;
}

export default function MenuButton({red, text, onClick}: Props){
    const context = useContext(ThemeContext);
    const theme = context?.theme;
    const actualTheme = theme === "auto" ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light") : theme;

    return (
        <button 
            type="button"
            onClick={onClick}
            className={`w-[120px] h-[30px] rounded-lg border text-[12px] font-bold font-display transition duration:300
                md:w-[220px] md:h-[50px] md:text-[25px]
                ${red ? "text-red-500 border-[red] hover:text-[#FF5454] hover:border-[#FF5454]" :
                    `${actualTheme == "dark"
                        ? "text-white border-white hover:bg-[#1A1A1A]"
                        : "text-black border-black hover:bg-[#EAEAEA]"
                    }`
                }`}>
            {text}
        </button>
    )
}