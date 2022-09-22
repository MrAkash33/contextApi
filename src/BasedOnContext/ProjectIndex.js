import React from "react";
import Header from "./Components/Header";
import ListPost from "./Components/ListPost";
import AddPosts from "./Components/AddPosts";
import ApiContextProvider from "./Contexts/ApiContext";

const ProjectIndex = () => {
    return (
        <ApiContextProvider>
            <Header/>
            <AddPosts/>
            <ListPost/>
        </ApiContextProvider>
    )
}

export default ProjectIndex