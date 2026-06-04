import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

type Props = {
    children: React.ReactNode;
};

export default function Title({children}: Props) 
{
    const context = useContext(ThemeContext);
    const theme = context?.theme;
    const actualTheme = theme === "auto" ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light") : theme;

    return(
        <h1 className={`font-display text-[20px] font-bold mb-[5px]
            ${actualTheme == "dark" ? "text-white" : "text-black"}
            md:text-[40px]`}
        >{children}</h1>
    )
}