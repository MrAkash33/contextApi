import axios, { Axios } from "axios";
import React, { createContext, useEffect, useState,useRef } from "react";
import uuid from "react-uuid";
import { allPost } from "../Constants/endpoints";

export const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {
    const inputElement = useRef();
    const inputElement2 = useRef();
    const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('body')) || [])
    useEffect(() => {
        getApi()
    }, [])

    const getApi = async () => {
        const getRequest = await axios.get(allPost)
        console.log(">>>>>", getRequest);
        setPosts([...getRequest.data])
    }

    const addPost = (body, title) => {
        const data = posts
        data.push({ id: uuid(), body: body, userId: uuid(), title: title })
        console.log(">>>>",data);
        localStorage.setItem("body", JSON.stringify(data));
    }
    const editHandler = (data) =>{
          inputElement.current.value = data.title
          inputElement2.current.value = data.body
    }

    return (
        <ApiContext.Provider value={{ posts, addPost,editHandler,inputElement,inputElement2 }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiContextProvider