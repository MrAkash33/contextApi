import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const ThemeToggale = () =>{
    const ToggleTheme = useContext(ThemeContext)
    const {Toggle} = ToggleTheme
    return(
        <>
            <button onClick={Toggle}>Toggle The Theme</button>
        </>
    )
}

export default ThemeToggale