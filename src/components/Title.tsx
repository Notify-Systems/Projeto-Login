import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

type Props = {
    text: string;
};

export default function Title({text}: Props) 
{
    const context = useContext(ThemeContext);
    const theme = context?.theme;
    const actualTheme = theme === "auto" ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light") : theme;

    return(
        <h1 className={`font-display text-[40px] font-bold mb-[5px] ${actualTheme == "dark" ? "text-white" : "text-black"}`}>{text}</h1>
    )
}