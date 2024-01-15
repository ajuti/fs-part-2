import { useState } from 'react'
import Header from './components/Header'
import { Filter } from './components/Filter'
import NewContact from './components/NewContact'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "040-1231244" },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState("")
  const [filter, setFilter] = useState("")
  

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
      <Header title={"Phonebook"} />
      <Filter filter={filter} setFilter={setFilter} />
      <Header title={"add a new"} />
      <NewContact 
        newName={newName} 
        setNewName={setNewName} 
        newNum={newNum} 
        setNewNum={setNewNum} 
        addName={addName} />
      <Header title={"Numbers"} />
      <Persons persons={persons} filter={filter} />
    </div>
  )

}

export default App