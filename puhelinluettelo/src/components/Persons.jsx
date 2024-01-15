const Persons = ({ persons, filter }) =>  {
  return (
    <>
      {persons.filter(x => x.name.includes(filter)).map(obj => 
        <p key={obj.name}>{obj.name} {obj.number}</p>   
      )}
    </>
  )
}

export default Persons