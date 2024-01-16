import { useState, useEffect } from 'react'
import Header from './components/Header'
import FilterComp from './components/FilterComp'
import NewContact from './components/NewContact'
import Persons from './components/Persons'
import axios from 'axios'
import personService from "./services/persons.js"

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState("")
  const [filter, setFilter] = useState("")

  const jsonHook = () => {
    console.log("retrieving persons")
    personService
      .getAll()
      .then(initialList => {
        console.log("promise fulfilled")
        setPersons(initialList)
      })
  }

  useEffect(jsonHook, []) // executes after each render

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

    personService
      .create(nameObj)
      .then(newContact => {
        console.log(newContact)
        setPersons(persons.concat(newContact))
      })

    setNewName("")
    setNewNum("")
  }

  return (
    <div>
      <Header title={"Phonebook"} />
      <FilterComp filter={filter} setFilter={setFilter} />
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