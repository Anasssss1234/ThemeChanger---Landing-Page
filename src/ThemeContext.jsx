import { children, createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
    const[theme,settheme]=useState('light')
    const [moon, setmoon]=useState(true)

    const handleClick = ()=>{
        const updatedData = theme==='light'? 'dark': 'light';
        settheme(updatedData)
        setmoon(false)
    } 
    const Click = ()=>{
        setmoon(true);
        const updatedData = theme==='light'? 'dark': 'light';
        settheme(updatedData)
    }
    return(
        <ThemeContext.Provider value={{theme, moon, handleClick, Click}}>
            {children}
        </ThemeContext.Provider>
    )
}