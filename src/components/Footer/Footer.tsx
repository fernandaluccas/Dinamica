import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-column logo-column">
          <img src="/imagens/Logo-Footer.png" alt="Logo" className="footer-logo" />
          
        </div>

        <div className="footer-column">
          <h3>Navegação</h3>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#kits">Kits</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Suporte</h3>
          <ul>
            <li>casabotanica@gmail.com</li>
            <li>(47) 99999-9999</li>
            <li>Ajuda & Suporte</li>
            <li>Termos de Compromisso</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Redes Sociais</h3>
          <div className="social-icons">
              <a href="https://wa.me/seunumeroaqui" className="social-link" target="_blank" rel="noreferrer">
              <img src="/imagens/whatsApp.png" alt="WhatsApp" className="social-icon" />
              </a>
              <a href="https://instagram.com/seuuser" className="social-link" target="_blank" rel="noreferrer">
              <img src="/imagens/instagram.png" alt="Instagram" className="social-icon" />
              </a>
              <a href="https://facebook.com/suapagina" className="social-link" target="_blank" rel="noreferrer">
              <img src="/imagens/facebook.png" alt="Facebook" className="social-icon" />
              </a>
          </div>
        </div>

      </div>

      <div className="footer-copy">
        <p>UNECT JR - TODOS OS DIREITOS RESERVADOS</p>
      </div>
    </footer>
  );
};

export default Footer;