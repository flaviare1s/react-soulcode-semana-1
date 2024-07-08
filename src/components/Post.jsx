import { useState } from 'react'
import './Post.css'

const Post = ({ titulo, descricao }) => {
  const [curtir, setCurtir] = useState(false)

  return (
    <section className='post'>
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <button onClick={() => setCurtir(!curtir)}>
        {curtir ? <span class="material-symbols-outlined curtiu">favorite</span> : <span class="material-symbols-outlined">favorite</span>}
      </button>
    </section>
  )
}

export default Post
