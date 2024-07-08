import './Abas.css'
import { useState } from 'react'
import Carrossel from './Carrossel'

const Abas = () => {
  const [aba, setAba] = useState('Carrossel')

  return (
    <section>
      <div className="botoes">
        <button className={aba === 'Impacto Social' ? 'ativo' : ''} onClick={() => setAba('Impacto Social')}>Impacto Social</button>
        <button className={aba === 'Empregabilidade' ? 'ativo' : ''} onClick={() => setAba('Empregabilidade')}>Empregabilidade</button>
        <button className={aba === 'Tecnologico' ? 'ativo' : ''} onClick={() => setAba('Tecnologico')}>Tecnológico</button>
        <button className={aba === 'Carrossel' ? 'ativo' : ''} onClick={() => setAba('Carrossel')}>Carrossel</button>
      </div>
      <hr />
      {aba === 'Impacto Social' && <section>
        <h2>Impacto Social</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, minima!</p>
        </section>}
        {aba === 'Empregabilidade' && <section>
        <h2>Empregabilidade</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dignissimos amet consequatur quam officiis perspiciatis voluptates illum rerum aperiam nemo.</p>
        </section>}
        {aba === 'Tecnologico' && <section>
        <h2>Tecnológico</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sint, distinctio ex debitis doloremque explicabo.</p>
        </section>}
        {aba === 'Carrossel' && <Carrossel />}
    </section>
  )
}

export default Abas
