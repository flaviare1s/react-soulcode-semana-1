// jsx => JavaScript Extended
// Vai permitir escrever código HTML dentro do JS
// import Blog from "./components/Blog"
// import Navbar from './components/Navbar'
// import Rodape from "./components/Rodape"
// import Produto from './components/Produto'
// import Eventos from './components/Eventos'
// import CardAluno from './components/CardAluno'
import Contador from './components/Contador'


import './App.css'
import { useState } from 'react'


function App() {
  // const [logado, setLogado] = useState(false)

  // const handleLogin = () => {
  //   setLogado(true)
  // }

  // const handleLogout = () => {
  //   setLogado(false)
  // }

  return (
    <main>
      <Contador />
      <Contador valorInicial={1} />
      <Contador valorInicial={2} />
      {/* <Eventos /> */}
      {/* <Navbar logado={logado} nomeUsuario="Batata" onLogin={handleLogin} onLogout={handleLogout}/>
      <section className="cards-container">
        <CardAluno nomeAluno='Maria' serie='5° ano' media='9.5' />
        <CardAluno nomeAluno='João' serie='4° ano' media='8.5' />
        <CardAluno nomeAluno='Jose' serie='3° ano' media='7.5' />
        <CardAluno nomeAluno='Pedro' serie='2° ano' media='6.5' />
      </section>
      <Produto nome='Ps5 Console Slim Bundle Ratchet Clank and Returnal Cor Branco' precoUnitario={4399.00} desconto={14} />
      <Blog />
      <Rodape /> */}
    </main>
  )
}

export default App
