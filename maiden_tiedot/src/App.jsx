import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList'

const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [filteredCountries, setFiltered] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    console.log("effect run")

    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(response => {
        setAllCountries(response.data)
        setFiltered(response.data) // kysy
      })
  }, [])

  const handleInputChange = (event) => {
    const val = event.target.value.toLowerCase()
    console.log(val)
    setFilter(val)
    setFiltered(
      allCountries.filter(country => country.name.common.toLowerCase().includes(val))
    )
  }

  return (
    <>
      <div>
        find countries
        <input onChange={handleInputChange} />
      </div>
      <CountryList countries={filteredCountries} setFiltered={setFiltered} />
    </>
  )
}

export default App
