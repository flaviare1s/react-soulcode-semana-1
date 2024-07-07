import './Produto.css'

const Produto = ({nome, precoUnitario, desconto}) => {
  return (
    <article className='produto'>
      <h2>{nome}</h2>
      {desconto > 0 ? <p className='preco-cortado'>R$ {precoUnitario}</p> : <p className='preco-unitario'>R$ {precoUnitario}</p>}
      {desconto > 0 && <span className='preco-desconto'>R$ {(precoUnitario - (precoUnitario * (desconto / 100))).toFixed()}</span>}
      {desconto > 0 && <span className='desconto'>{desconto}% OFF</span>}
    </article>
  )
}

export default Produto
