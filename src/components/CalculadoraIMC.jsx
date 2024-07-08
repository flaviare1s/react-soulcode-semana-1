import { useState } from "react"

const CalculadoraIMC = () => {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [imc, setImc] = useState(0)

  function handleIMC() {
    setImc(peso / altura ** 2)
  }

  return (
    <section>
      <h3>Calculadora IMC</h3>
      <input 
        type="number"
        placeholder="Digite seu peso (kg)"
        onChange={(evento) => setPeso(evento.target.value)}
      />
      <input 
        type="number"
        placeholder="Digite sua altura (cm)"
        onChange={(evento) => setAltura(evento.target.value)}
      />
      <br />
      <button onClick={handleIMC}>Calcular</button>
      <hr />
      <h4>Seu IMC é: {imc.toFixed(2)}</h4>
    </section>
  )
}

export default CalculadoraIMC
