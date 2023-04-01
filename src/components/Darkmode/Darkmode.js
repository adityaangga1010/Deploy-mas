import { useState, useEffect } from 'react';

const Darkmode = () => {
    const [theme, setTheme] = useState(localStorage.theme);
    const nextTheme = theme === "light" ? "dark" : "light";
    
    useEffect(() => {
        const rootElement = window.document.documentElement;
        rootElement.classList.add(nextTheme);
        rootElement.classList.remove(theme);
        localStorage.setItem("theme", theme);
    }, [theme, nextTheme])
    
    return [nextTheme, setTheme];
}

export default Darkmode