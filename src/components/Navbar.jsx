import './Navbar.css'

// Renderização condicional = muda o visual e a estrutura de acordo com um valor
const Navbar = ({logado, nomeUsuario, onLogin, onLogout}) => {
  // Operador &&: se o primeiro valor for true, ele mostra a img. 
  // Caso seja false, ele ignora o que está após &&.
  
  return (
    <header className='navbar'>
      <hr />
      <div className="navbar-user">
        {logado && <img width="25" src="https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-1024x1024.png"/>}
        <p>{logado ? `Bem-vindo(a), ${nomeUsuario}` : 'Voce não está logado(a)!'}</p>
      </div>
      <nav className="menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Postagens</a></li>
          {logado && <li><a href="#">Meu perfil</a></li>}
          {logado && <li><button onClick={onLogout}>Sair</button></li>}
          {!logado && <li><button onClick={onLogin}>Login</button></li>}
        </ul>
      </nav>
    </header>
    )
}

export default Navbar
