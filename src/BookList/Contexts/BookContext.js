import React, { createContext, useState } from "react";
import uuid from "react-uuid";

export const Bookcontext = createContext();

const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState([
        { id: 1, title: 'name of the bn', author: 'Rn Vrahman' },
        { id: 2, title: 'the final game', author: 'John WIck' },
        { id: 3, title: 'Rich Poor', author: 'Ac Man' }
    ])
    const addBook = (author, book) => {
        setBooks([...books, { id: uuid(), title: author, author: book }])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };


    return (
        <Bookcontext.Provider value={{ addBook, books, removeBook }}>
            {children}
        </Bookcontext.Provider>
    )
}

export default BookContextProvider