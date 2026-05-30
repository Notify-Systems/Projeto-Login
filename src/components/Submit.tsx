import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

type Props = {
    value: string;
    onClick: () => void;
}

export default function Submit({value, onClick}: Props){
    const context = useContext(ThemeContext);
    const theme = context?.theme;
    const actualTheme = theme === "auto" ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light") : theme;

    return (
        <>
            <input type="submit" onClick={onClick} value={value}
            className={`px-4 py-1 md:w-50 w-35 rounded-lg border border-[#888] text-[15px] font-bold font-display
                transition duration-300
                md:text-[25px]
                ${actualTheme === "dark"
                    ?"bg-[#1A1A1A] hover:bg-[#222] text-white"
                    : "bg-[#EAEAEA] hover:bg-[#E2E2E2] text-black"
                }`} />
        </>
    )
}