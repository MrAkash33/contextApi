import React, { useEffect, useState } from "react";


const NewSong = (props) =>{
    const [title,setTitle] = useState('')
    const HandleSubmit = (e) =>{
        e.preventDefault();
        props.addSong(title);
        setTitle('');
    }

    return(
        <>
            <form onSubmit={HandleSubmit}>
                <input placeholder="Place your song here" value={title} required onChange={(e) => {setTitle(e.target.value)}}/>
                <input type="submit"/>
            </form>
        </>
    )
}

export default NewSong