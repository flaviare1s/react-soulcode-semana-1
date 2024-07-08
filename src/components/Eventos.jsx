// Eventos => são ações que acontecem na página
// Os eventos podem ser provocados pelo usuário
// Manipulador de evento (handler) => é uma resposta ao evento

const Eventos = () => {

  function handleClick() {
    alert('Você clicou!')
  }

  return (
    <section>
      <button onClick={handleClick}>Clique aqui</button>
      <button onClick={() => alert('Clicou novamente!')}>Clique novamente</button>
      <h1 onMouseEnter={() => confirm('Você está bem?')}>Passe o mouse aqui!</h1>
    </section>
  )
}

export default Eventos
