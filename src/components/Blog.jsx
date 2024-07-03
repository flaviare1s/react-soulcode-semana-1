import './Blog.css'
import Postagem from './Postagem'

const Blog = () => {
  return (
    <section className='blog'>
      <Postagem tituloPostagem='React é muito bom!' descricao='React é framework ou biblioteca? Não sei, só sei que é bom!' linkImagem='https://picsum.photos/200' />
      <Postagem tituloPostagem='Vite ajuda muito!' descricao='Vite agiliza muito a elaboração de um projeto usando React!' linkImagem='https://picsum.photos/200' />
      <Postagem tituloPostagem='No jsx podemos usar JavaScript dentro de uma estrutura HTML' linkImagem='https://picsum.photos/200'/>
      <Postagem tituloPostagem='Bootstrap e Tailwind!' descricao='Bootstrap e Tailwind são frameworks de CSS!' linkImagem='https://picsum.photos/200' />
      <Postagem tituloPostagem='Postagem alternativa' linkImagem='https://picsum.photos/200' />
      <Postagem tituloPostagem='Postagem alternativa' linkImagem='https://picsum.photos/200' />
    </section>
  )
}

export default Blog
