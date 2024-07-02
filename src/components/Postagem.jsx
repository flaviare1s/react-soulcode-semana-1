import './Postagem.css'

const Postagem = () => {
  const tituloPostagem = 'Título da Postagem'
  const linkImagem = 'https://picsum.photos/200'

  return (
    <section className='corpo-postagem'>
      <h2 className='titulo-postagem'>{tituloPostagem}</h2>
      <p className="descricao-postagem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, perferendis.</p>
      <img className='imagem-postagem' src={linkImagem} alt="Imagem da postagem" />
    </section>
  )
}

export default Postagem
