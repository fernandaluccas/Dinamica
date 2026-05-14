import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <img src="/imagens/Logo-Header.png" alt="Logo Casa Botânica" />
      <nav>
        <ul className="nav-links">
          <li><a href="#">Início</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Kits</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
      <a href="#" className="btn-catalogo">Explorar Catálogo</a>
    </header>
  );
};

export default Header;
