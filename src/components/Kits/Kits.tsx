import React, { useState } from 'react';
import './Kits.css';

import kit1 from '../../assets/Hover Kit 1.png';
import kit2 from '../../assets/Hover Kit 2.png';
import kit3 from '../../assets/Hover Kit 3.png';
import kit4 from '../../assets/Hover Kit 4.png';

const kitsData = [
  { 
    id: 1, 
    image: kit1, 
    title: "Kit Iniciante", 
    price: "R$ 79.90", 
    description: "Ideal para quem está começando no mundo das plantas." 
  },
  { 
    id: 2, 
    image: kit2, 
    title: "Kit Relaxamento", 
    price: "R$ 99.90", 
    description: "Perfeito para criar um ambiente leve e tranquilo." 
  },
  { 
    id: 3, 
    image: kit3, 
    title: "Kit Decoração", 
    price: "R$ 149.90", 
    description: "Transforme seu espaço com plantas sofisticadas." 
  },
  { 
    id: 4, 
    image: kit4, 
    title: "Kit Produtividade", 
    price: "R$ 89.90", 
    description: "Perfeito para quem quer mais foco, organização mental e um ambiente de trabalho mais agradável" 
  }
];

const Kits = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setActiveCard(id);
  };

  return (
    <section className="kits-section">
      <div className="kits-header">
        <h2 className="kits-title">Kits</h2>
      </div>
      
      <div className="kits-container">
        {/* Spacer esquerdo equivalente a 1 card (visível apenas no desktop via CSS) */}
        <div className="kit-spacer"></div>

        {kitsData.map((kit) => (
          <div 
            key={kit.id} 
            className={`kit-card ${activeCard === kit.id ? 'active' : ''}`}
            onClick={() => handleCardClick(kit.id)}
          >
            <img src={kit.image} alt={kit.title} className="kit-image" />
            <div className="kit-content">
              <div className="kit-row-1">
                <h3 className="kit-title">{kit.title}</h3>
                <span className="kit-price">{kit.price}</span>
              </div>
              <p className="kit-description">{kit.description}</p>
            </div>
          </div>
        ))}

        {/* Spacer direito equivalente a 1 card (visível apenas no desktop via CSS) */}
        <div className="kit-spacer"></div>
      </div>
    </section>
  );
};

export default Kits;
