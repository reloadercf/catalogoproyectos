import { useEffect, useState } from "react"
import Character from "./Character"
export default function DataLovers() {
  const [characters, setCharacters]=useState(null)
  const [typeFilter, setTypeFilter]=useState(null)
  const [dataRender, setDataRender]=useState(null)
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


  const filterData=()=>{
    if(typeFilter){
      return characters.filter((oneCharacter)=>oneCharacter.species===typeFilter)
    }
  }

  useEffect(()=>{
    setDataRender(filterData());
  },[typeFilter])

  return (
    <div>
        <h2>Este es mi proyecto de DL</h2>
        <select onChange={handleSelectFilter}>
          <option>Human</option>
          <option>Alien</option>
        </select>
        {characters?typeFilter===null?characters.map(character=><Character character={character} key={character.id} />):dataRender?dataRender.map(character=><Character character={character} key={character.id} />):null:null }
    </div>
  )
}
