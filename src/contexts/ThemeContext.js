import React , {createContext, useState} from "react";

export const ThemeContext = createContext();


const ThemeContextPro = (props) =>{
    const [isLightTheme,setIsLightTheme ] =  useState(false)
    const [light,setLight ] =  useState(
        {
            syntax:'#555',
            ui:'#ddd',
            bg:'#eee'
        }
    )
    const [dark,setDark] = useState(
        {
            syntax:'#ddd',
            ui:'#333',
            bg:'#555'
        }
    )
    const Toggle = () => {
        setIsLightTheme(!isLightTheme)
    } 
    return(
        <>
        <ThemeContext.Provider value={{dark,light,isLightTheme,Toggle}}>
            {props.children}
        </ThemeContext.Provider>
        </>
    )
}

export default ThemeContextPro
