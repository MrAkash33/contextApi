import React, { useContext } from "react";
import { Bookcontext } from "../Contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
    const { books } = useContext(Bookcontext)
    return (
        <>
            {books.length > 0 ? books.map((book) => <ul>
                <BookDetails book={book} key={book.id}/>
            </ul>) : 'No Book Added while'}
        </>
    )
}

export default BookList