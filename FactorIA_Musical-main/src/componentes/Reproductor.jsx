import React from "react"
import {useEffect, useState} from "react"

import './App.css'

function Reproductor() {
  const [songs, setSongs] = useState ([])

  useEffect(()=>{
    axios.get("http://localhost:5173/api/info")
    .then(info=>setSongs(info.data.reverse()))
  }, [])

  console.log(songs) 
  return (
      <div>
        {songs.map(song=><h1>{song.titulo}</h1>)}
      </div>
  )
}

export default Reproductor