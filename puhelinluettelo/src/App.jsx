import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  
  const handleInputChange = (event) => {
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    if (persons.map(x => x.name).includes(newName)) {
      alert(`${newName} is already added to the phonebook`)
      return 
    }
    const nameObj = {
      name: newName,
    }

    setPersons(persons.concat(nameObj))
    setNewName("")
  }

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(obj => 
        <p key={obj.name}>{obj.name}</p>   
      )}
    </div>
  )

}

export default App