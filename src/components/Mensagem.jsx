import PropTypes from 'prop-types'
import './Mensagem.css'

const Mensagem = ({ tituloTexto, nomeAutor, paragrafo, linkImagem }) => {

  return (
    <section className="mensagem-corpo">
      <h2 className="mensagem-titulo">{tituloTexto.toUpperCase()}</h2>
      <img src={linkImagem} alt="Imagem da mensagem" />
      <p className="paragrafo">{paragrafo}</p>
      <small>Criado por: {nomeAutor}</small>
    </section>
  )
}

export default Mensagem

Mensagem.propTypes = {
  tituloTexto: PropTypes.string.isRequired,
  nomeAutor: PropTypes.string.isRequired,
  paragrafo: PropTypes.string.isRequired,
  linkImagem: PropTypes.string.isRequired,
}
