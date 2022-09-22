import React, { useContext, useState,useRef } from "react";
import { isFocus, isValidation } from "../Constants/constant";
import { ApiContext } from "../Contexts/ApiContext";

const AddPosts = () => {
    const { addPost,inputElement,inputElement2 } = useContext(ApiContext)
    // const [body, setBody] = useState('');
    // const [title, setTitle] = useState('');
    console.log(inputElement.current?.value,"inputElementinputElement")
    function onChangeHandler(e, fun) {
        fun(e.target.value)
    }
    
    const handlePosts = (e) => {
        e.preventDefault();
        const firstValue = inputElement.current?.value;
        const secondValue = inputElement2.current?.value;
        if(isValidation(firstValue,secondValue)){
            addPost(firstValue, secondValue);
            // setBody('');
            // setTitle('');
            isFocus('postId');
        }else{
            console.warn('input value is less than of 6');
        }
    }
    return (
        <>
            <form onSubmit={handlePosts}>
                {/* <input type="text" value={body} placeholder="Input Your Body Here" onChange={(e) => onChangeHandler(e, setBody)} /> */}
                <input type="text" ref={inputElement}  placeholder="Input Your Body Here"/>
                {/* <input type="text" id='postId' value={title} placeholder="Input Your Post Here" onChange={(e) => onChangeHandler(e, setTitle)} /> */}
                <input type="text" id='postId' ref={inputElement2} placeholder="Input Your Post Here"  />
                <input type="submit" />
            </form>
        </>
    )
}
export default AddPosts