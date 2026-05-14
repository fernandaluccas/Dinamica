import './App.css';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <>
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
      <main>
        <section className="hero">
          <img src="/imagens/Background-Img.png" alt="Decoração de folha" className="leaf-decor" />
          <div className="hero-conteudo">
            <p className="tagline">Cultivo natural • Bem-estar • Sustentabilidade</p>
            <h1>Transforme seu espaço com o <span>poder das plantas</span></h1>
            <p className="descricao">
              Selecionamos plantas ideais para sua rotina e seu ambiente,
              com orientação completa para você cuidar sem complicação
            </p>
            
            <div className="botoes">
              <button className="btn-principal">Explorar Plantas</button>
              <button className="btn-secundario">Montar Meu Kit</button>
            </div>
          </div>
          <div className="hero-imagem">
            <img src="/imagens/hero-image.png" alt="Imagem de destaque da Casa Botânica" />
          </div>
        </section>
        <AboutUs />
      </main>
    </>
  );
}

export default App;
