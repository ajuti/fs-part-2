import personService from "../services/persons.js"

const Persons = ({ persons, filter, setPersons }) =>  {
  const handleDestroyName = ({name, id}) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .destroy(id)
        .then(deleted => {
          const newList = [...persons].filter(x => x.id !== deleted.id) 
          setPersons(newList)
        })
        .catch(error => {
          console.log(`sumthng fcked up: ${error}`)
        })
    } else {
      console.log("User didn't want to delete the contact")
    }
  }

  return (
    <>
      {persons.filter(x => x.name.includes(filter)).map(obj => 
        <p key={obj.name}>
          {obj.name} {obj.number}
          <button onClick={() => handleDestroyName(obj)}>delete</button>
        </p>
      )}
    </>
  )
}

export default Persons