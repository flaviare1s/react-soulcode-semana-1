import './Produto.css'

const Produto = ({nome, precoUnitario, desconto}) => {
  return (
    <article className='produto'>
      <h2>{nome}</h2>
      <p className='preco-unitario'>R$ {precoUnitario}</p>
      <span className='preco-desconto'>R$ {(precoUnitario - (precoUnitario * (desconto / 100))).toFixed()}</span>
      <span className='desconto'>{desconto}% OFF</span>
    </article>
  )
}

export default Produto
