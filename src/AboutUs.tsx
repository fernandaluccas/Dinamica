import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Left Column: Content */}
        <div className="about-content">
          <span className="about-label">Sobre nós</span>
          <h2 className="about-title">
            Criamos experiências naturais para sua casa
          </h2>
          
          <p className="about-paragraph">
            Na <strong className="highlight-text">Casa Botânica</strong>, acreditamos que o contato com a natureza transforma não só os ambientes, mas também a forma como vivemos e nos sentimos no dia a dia.
          </p>
          <p className="about-paragraph">
            Por isso, selecionamos cuidadosamente plantas e criamos soluções práticas para que qualquer pessoa, mesmo sem experiência, consiga cultivar um espaço mais leve, saudável e cheio de vida.
          </p>

          <div className="about-cards-wrapper">
            <div className="about-cards">
              {/* Card 1 */}
              <div className="about-card">
                <div className="card-icon-container">
                  <img src="/Vector_vaso.svg" alt="Ícone Vaso" className="card-icon" />
                </div>
                <p className="card-text">Curadoria de plantas para iniciantes</p>
              </div>

              {/* Card 2 */}
              <div className="about-card">
                <div className="card-icon-container">
                  <img src="/Vector_livro.svg" alt="Ícone Livro" className="card-icon" />
                </div>
                <p className="card-text">Guia completo de manutenção</p>
              </div>

              {/* Card 3 */}
              <div className="about-card about-card-caixa">
                <div className="card-icon-container">
                  <img src="/Vector_caixa.svg" alt="Ícone Caixa" className="card-icon" />
                </div>
                <p className="card-text">Kits prontos e fáceis de cuidar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Image Grid */}
        <div className="about-image-grid-container">
          <div className="about-image-grid">
            <div className="grid-col grid-col-1">
              <img src="/Grid Img-3.png" alt="Ambiente decorado 1" className="grid-img grid-img-h1" />
              <img src="/Grid ImgMain.png" alt="Ambiente decorado 2" className="grid-img grid-img-v1" />
            </div>
            <div className="grid-col grid-col-2">
              <img src="/Grid Img-1.png" alt="Ambiente principal" className="grid-img grid-img-main" />
              <img src="/Grid Img-2.png" alt="Ambiente decorado 3" className="grid-img grid-img-h2" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
