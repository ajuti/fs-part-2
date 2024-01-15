import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "040-1231244" }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState("")
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNum(event.target.value) 
  }

  const addName = (event) => {
    event.preventDefault()
    if (persons.map(x => x.name).includes(newName)) {
      alert(`${newName} is already added to the phonebook`)
      return 
    }
    if (persons.map(x => x.number).includes(newNum)) {
      alert(`${newNum} is already added to the phonebook`)
      return 
    }
    const nameObj = {
      name: newName,
      number: newNum,
    }

    setPersons(persons.concat(nameObj))
    setNewName("")
    setNewNum("")
  }

  return (
    <div>
      <div>debug: {newName}</div>
      <div>debug: {newNum}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNum} onChange={handleNumChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(obj => 
        <p key={obj.name}>{obj.name} {obj.number}</p>   
      )}
    </div>
  )

}

export default App