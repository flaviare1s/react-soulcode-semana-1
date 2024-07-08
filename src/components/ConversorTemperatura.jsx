import { useState } from 'react'
import './ConversorTemperatura.css'

const ConversorTemperatura = () => {
  const [celsius, setCelsius] = useState(0)
  const [fahrenheit, setFahrenheit] = useState(0)

  function handleClick() {
    setFahrenheit((celsius * 1.8) + 32)
  }

  return (
    <section className='conversor'>
      <h3>Conversor de temperatura</h3>
      <input 
        type="number"
        placeholder='temperatura em Cº'
        onChange={(event) => setCelsius(event.target.value) }
      />
      <br />
      <button onClick={handleClick}>Converter</button>
      <p>Temperatura em Fahrenheit: {fahrenheit}</p>
    </section>
  )
}

export default ConversorTemperatura
