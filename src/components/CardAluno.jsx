import './CardAluno.css'

const CardAluno = ({ nomeAluno, serie, media}) => {
  return (
      <article className="card-aluno">
        <h2>{nomeAluno}</h2>
        <p>{serie}</p>
        {media >= 7 ? <p style={{color: 'green'}} className='media'>{media}</p> : <p style={{color: 'red'}} className='media'>{media}</p>}
        {media >= 7 ? <p style={{color: 'green'}} className='aprovado'>Aprovado</p> : <p style={{color: 'red'}} className='reprovado'>Reprovado</p>}
      </article>
  )
}

export default CardAluno
