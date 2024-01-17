const Country = ({ country }) => {
  console.log(country.languages)
    return (
      <>
        <h1>{country.name.common}</h1>
        <p>
          capital {country.capital[0]}<br/>
          area {country.area}
        </p>
        <h4>languages:</h4>
        <ul>
          {Object.values(country.languages).map(lang => {
            <li>{lang}</li>
          })}
        </ul>
        <img src={country.flags.png} />
      </>
    )
}

export default Country