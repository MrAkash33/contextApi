import React from "react";
import Navbar from "./Components/Navbar";
import BookList from "./Components/BookList";

import BookContextProvider from "./Contexts/BookContext";
import AddBook from "./Components/AddBook";

const BookIndex = () => {
    return (
        <>
            <BookContextProvider>     
                <Navbar/>
                <BookList/>
                <AddBook/>
            </BookContextProvider>
        </>
    )
}

export default BookIndex