// jsx => JavaScript Extended
// Vai permitir escrever código HTML dentro do JS
import './App.css'
import Blog from "./components/Blog"
import Rodape from "./components/Rodape"
import Mensagem from "./components/Mensagem"
function App() {

  return (
    <main>
      <Blog />
      <Mensagem tituloTexto='Batatinha quando nasce se esparrama pelo chão' nomeAutor='J. Almir' paragrafo='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, soluta.' linkImagem='https://picsum.photos/200' />
      <Rodape />
    </main>
  )
}

export default App
