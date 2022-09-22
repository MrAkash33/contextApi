import React, { useContext } from "react";
import { Bookcontext } from "../Contexts/BookContext";

const Navbar = () =>{
    const {books} = useContext(Bookcontext);
    return(
        <>
            <div className="app">
                
                <h5>Welcome to Book Store</h5>
                <p>We have <strong style={{fontSize:"20px"}}>{books.length}</strong> Book</p>
            </div>
        </>
    )
}
export default Navbar