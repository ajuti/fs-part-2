import Country from "./Country"

const CountryList = ({countries, setFiltered}) => {
  if (countries.length > 10) {
    return (
      <>
        Too many countries, specify another filter
      </>
    )
  } else if (countries.length >= 2) {
    return (
      <ul className="countryList">
        {countries.map(country => 
          <li key={country.name.common}>
            {country.name.common}
            <button onClick={() => setFiltered([country])}>show</button>
          </li>    
        )}
      </ul>
    )
  } else if (countries.length === 1) {
    return (
      <Country country={countries[0]} />
    )
  } else {
    return (
      <>
        No countries found
      </>
    )
  }
}

export default CountryList