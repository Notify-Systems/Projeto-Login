import { createContext, useState, type ReactNode } from "react";

type ThemeContextType = {
    theme: string;
    toggleTheme: (theme: string) => void; // void significa que não retorna nada
};

export const ThemeContext = createContext<ThemeContextType | null /*Só aceita valores do ThemeContextType ou nulos*/>(null /*O contexto começa nulo*/);

type Props = {
    children: ReactNode;
}

export function ThemeProvider({children}: Props) {
    const [theme, setTheme] = useState("auto");

    function toggleTheme(select: string) {
        setTheme(select);
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}