import { useEffect, useMemo, useState } from "react"
import Character from "./Character"

export default function DataLovers({user}) {
  const [characters, setCharacters]=useState(null)
  const [typeFilter, setTypeFilter]=useState(null)

  // funcion, cuando lo ejecuto
  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character')
    .then(response=>response.json())
    .then(allCharacters=>setCharacters(allCharacters.results))
  },[])

  const handleSelectFilter=(e)=>{
    console.log(e.target.value);
    setTypeFilter(e.target.value)
  }

  const filteredData = useMemo(()=>{
    if(typeFilter){
      return characters.filter((oneCharacter)=>oneCharacter.species===typeFilter)
    }
  },[typeFilter])

  return (
    <div>
        <h2>Este es mi proyecto de DL {user.mail}</h2>
        <select onChange={handleSelectFilter}>
          <option>Human</option>
          <option>Alien</option>
        </select>
        {characters&&typeFilter===null?characters.map(character=><Character character={character} key={character.id} />):null }
        {typeFilter&&filteredData.map(character=><Character character={character} key={character.id} />)}
    </div>
  )
}
