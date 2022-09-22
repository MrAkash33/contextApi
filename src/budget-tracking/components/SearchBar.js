import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const SearchBar = () => {
    const { dispatch } = useContext(AppContext)
    const [searchText, setSearchText] = useState('')
    const searchHandler = (e) => {
        setSearchText(e.target.value)
        dispatch({
            type: 'SEARCH_BAR',
            payload: searchText
        })
    }
    // const searchHandle = () => {
     
    // }
    return (
        <>
            <div className="d-flex">
                <input placeholder="Search Your Expense" className="form-control" onChange={searchHandler} />
                {/* <button className="btn btn-success" onClick={searchHandle}>Search</button> */}
            </div>
        </>
    )
}

export default SearchBar