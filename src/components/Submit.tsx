import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

type Props = {
    children: React.ReactNode;
    onClick: () => void;
}

export default function Submit({children, onClick}: Props){
    const context = useContext(ThemeContext);
    const theme = context?.theme;
    const actualTheme = theme === "auto" ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light") : theme;

    return (
        <>
            <button onClick={onClick}
            className={`px-4 py-1 md:w-50 w-35 rounded-lg border border-[#888] text-[15px] font-bold font-display
                transition duration-300
                md:text-[25px]
                ${actualTheme === "dark"
                    ?"bg-[#1A1A1A] hover:bg-[#222] text-white"
                    : "bg-[#EAEAEA] hover:bg-[#E2E2E2] text-black"
                }`}>{children}</button>
        </>
    )
}