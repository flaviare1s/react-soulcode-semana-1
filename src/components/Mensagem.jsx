import './Mensagem.css'

const Mensagem = () => {
  const tituloTexto = 'Batatinha quando nasce se esparrama pelo chão'
  const nomeAutor = 'J. Almir'
  const linkImagem = 'https://picsum.photos/200'

  return (
    <section className="mensagem-corpo">
      <h2 className="mensagem-titulo">{tituloTexto.toUpperCase()}</h2>
      <img src={linkImagem} alt="Imagem da mensagem" />
      <p className="paragrafo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, soluta.</p>
      <small>Criado por: {nomeAutor}</small>
    </section>
  )
}

export default Mensagem