import { useState } from 'react'
import './Contador.css'

const Contador = () => {
  // Para definir um estado usamos o useState
  // useState retorna um array com 2 elementos
  // o primeiro é o estado e o segundo e a função que atualiza o estado
  const [numero, setNumero] = useState(0)

  function handleIncremento() {
    // setNumero indica ao componente que ele deve atualizar o estado
    setNumero(numero + 1)
    console.log(numero)
  }

  function handleDecremento() {
    if(numero > 0) {
      setNumero(numero -1)
    }
  }

  return (
    <section className='contador'>
      <h2>Contagem: </h2>
      <div className='contagem'>
        <button onClick={handleDecremento}>-1</button>
        <p  className={numero % 2 === 0 ? 'par' : 'impar'}>{numero}</p>
        <button onClick={handleIncremento}>+1</button>
      </div>
    </section>
  )
}

export default Contador

// Para que o número mude na tela, o componente precisa renderizar novamente
// Para fazer isso, precisamos usar um ESTADO.
// Estado => variável especial que sincroniza as mudanças na tela.
