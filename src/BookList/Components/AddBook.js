import React, { useContext, useState } from "react";
import { Bookcontext } from "../Contexts/BookContext";
import { getId } from "../Global";
const AddBook = (input) => {
    const GetFun = getId('myid')
    const { addBook } = useContext(Bookcontext)
    const [author, setAuthor] = useState('')
    const [book, setBook] = useState('')
    
    const handleForm = (e) => {
        e.preventDefault();
        addBook(author, book);
        setAuthor('');
        setBook('');
        GetFun.focus();
    }
    function changeHandler(e, fun) {
        fun(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleForm}>
                <input type="text" value={author} placeholder="Enter Book Author Name" onChange={(e) => changeHandler(e, setAuthor)} required />
                <input type="text" id="myid" name="bookwala" value={book} placeholder="Enter Book Name" onChange={(e) => changeHandler(e, setBook)} required />
                <input type="submit" />
            </form>
        </>
    )
}

export default AddBook