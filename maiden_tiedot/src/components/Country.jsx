import WeatherData from "./WeatherData"

const Country = ({ country }) => {
    const langs = (Object.values(country.languages))

    return (
      <>
        <h1>{country.name.common}</h1>
        <p>
          capital {country.capital[0]}<br/>
          area {country.area}
        </p>
        <h4>languages:</h4>
        <ul>
          {langs.map(lang =>
            <li key={lang}>{lang}</li>
          )}
        </ul>
        <img src={country.flags.png} />
        <WeatherData country={country} />
      </>
    )
}

export default Country