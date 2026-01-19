import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

type Props = {
    text: string;
    newTheme: "light" | "dark" | "auto";
}

export default function ThemeButton({text, newTheme}: Props) {
    const context = useContext(ThemeContext);
    const theme = context?.theme;
    const toggleTheme = context?.toggleTheme;
    const actualTheme = theme === "auto" ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light") : theme;

    return (
        <button
            onClick={() => toggleTheme && toggleTheme(newTheme)}
            className={`rounded-full w-[100%] font-display rounded-none text-left text-[12px] px-[15px] py-[8px] transition duration-300
                first:rounded-t-lg last:rounded-b-lg md:text-[16px] md:px-[20px] md:py-[10px]
                ${actualTheme == "dark" ? "text-white hover:bg-[#222]" : "text-black hover:bg-[#e2e2e2]"}`}>
            {text}
        </button>
    )
}