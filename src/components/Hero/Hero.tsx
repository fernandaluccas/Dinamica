import './Hero.css';

const Hero = () => {
  return (
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
  );
};

export default Hero;
