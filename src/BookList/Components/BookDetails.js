import React, { useContext } from "react";
import { Bookcontext } from "../Contexts/BookContext";

const BookDetails = ({ book }) => {
    const { removeBook } = useContext(Bookcontext)
    return (
        <>
            <li onClick={() => removeBook(book.id)}>
                {book.title} & "{book.author}"
            </li>
        </>
    )
}

export default BookDetails