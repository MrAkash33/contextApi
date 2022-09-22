import React, { useState, useEffect } from "react";
import uuid from 'react-uuid'
import NewSong from "./NewSongs";
const SongList = () => {
    const [songs, setSongs] = useState([
        { id: 1, title: 'Sorry' },
        { id: 2, title: 'gossips sow' },
        { id: 3, title: 'sollow follow' }])

    const [age, setAge] = useState(20)

    const addSong = (title) => {
        setSongs([...songs, { id: uuid(), title: title }])
    }
    useEffect(() => {
        console.log('i am calling', songs)
    }, [songs])
    return (
        <>
            <ul>
                {songs.map((data) =>
                    <li key={data.id}>{data.title}</li>
                )}
                <NewSong addSong={addSong} />
                <button onClick={() => setAge(age + 1)}>Add age{age}</button>
            </ul>
        </>
    )
}
// TheNetNinja
export default SongList;