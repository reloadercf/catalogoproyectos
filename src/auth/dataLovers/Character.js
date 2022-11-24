export default function Character({character}) {
  return (
    <div>
        <h4>{character.name}</h4>
        <img src={character.image} />
    </div>
  )
}
