import React, { useContext } from "react";
import { ApiContext } from "../Contexts/ApiContext";

const ListPost = () => {
    const {posts,editHandler} = useContext(ApiContext)
    return (
        <>
            <ul>
                {
                    posts.length ? posts.map((data) =>
                        <li key={data.id} onClick={()=>editHandler(data)}>{data.title}</li>
                    ) : 'No Post Found'
                }
            </ul>
        </>
    )
}

export default ListPost