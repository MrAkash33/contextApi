import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";
const BookList = () =>{
    const theme = useContext(ThemeContext) 
    const Auth = useContext(AuthContext)
    console.log(theme,"thme")
    console.log(Auth,"thme")
    const {isLightTheme, light, dark } = theme
    const currentTheme = isLightTheme ? light :dark
    return(
        <>
            <ul style={{background:currentTheme.bg,color:currentTheme.syntax}}>
                <li>The Way of Kings</li>
                <li>Rich Dad Poor Dad</li>
                <li>The Final Month</li>
            </ul>
        </>
    )
}

export default BookList