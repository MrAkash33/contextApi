import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () =>{
    const theme = useContext(ThemeContext,AuthContext)
    console.log(theme,"theme")
    return(
        <>
            <ul style={{display:"flex",listStyle:"none",padding:"50px",justifyContent:"center",margin:"10px"}}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </>
    )
}

export default Navbar