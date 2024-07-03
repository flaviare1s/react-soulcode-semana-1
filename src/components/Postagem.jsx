import PropTypes from 'prop-types'
import './Postagem.css'

const Postagem = ({ tituloPostagem, descricao, linkImagem }) => {

  return (
    <section className='corpo-postagem'>
      <h2 className='titulo-postagem'>{tituloPostagem}</h2>
      <p className="descricao-postagem">{descricao}</p>
      <img className='imagem-postagem' src={linkImagem} alt="Imagem da postagem" />
    </section>
  )
}

export default Postagem

Postagem.propTypes = {
  tituloPostagem: PropTypes.string.isRequired,
  descricao: PropTypes.string,
  linkImagem: PropTypes.string.isRequired,
}
