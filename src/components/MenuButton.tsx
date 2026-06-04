import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

type Props = {
    children: React.ReactNode;
    red?: boolean;
    onClick?: () => void;
}

export default function MenuButton({red, children, onClick}: Props){
    const context = useContext(ThemeContext);
    const theme = context?.theme;
    const actualTheme = theme === "auto" ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light") : theme;

    return (
        <button 
            type="button"
            onClick={onClick}
            className={`w-[120px] h-[30px] rounded-lg border text-[12px] font-bold font-display transition duration:300
                md:w-[175px] md:h-10 md:text-[20px]
                ${red ? "text-red-500 border-[red] hover:text-[#FF5454] hover:border-[#FF5454]" :
                    `${actualTheme == "dark"
                        ? "text-white border-white hover:bg-[#1A1A1A]"
                        : "text-black border-black hover:bg-[#EAEAEA]"
                    }`
                }`}>
            {children}
        </button>
    )
}