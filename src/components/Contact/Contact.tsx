import React, { useState, useEffect } from 'react';
import './Contact.css';
import heroBg from '../../assets/Hero-Bg.png';

const Contact = () => {
  const [formData, setFormData] = useState({ nome: '', email: '', comentario: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ nome?: string; email?: string; comentario?: string }>({});
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        
        if (formData.nome) {
          const words = formData.nome.trim().split(/\s+/).filter(Boolean);
          if (words.length < 2) {
            newErrors.nome = 'Digite seu nome completo.';
          } else {
            delete newErrors.nome;
          }
        } else {
          delete newErrors.nome;
        }

        if (formData.email) {
          if (!formData.email.includes('@')) {
            newErrors.email = "O email deve conter um '@'.";
          } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email inválido.';
          } else {
            delete newErrors.email;
          }
        } else {
          delete newErrors.email;
        }

        if (formData.comentario) {
          const words = formData.comentario.trim().split(/\s+/).filter(Boolean);
          if (words.length < 3) {
            newErrors.comentario = 'A mensagem precisa ter no mínimo 3 palavras.';
          } else {
            delete newErrors.comentario;
          }
        } else {
          delete newErrors.comentario;
        }

        return newErrors;
      });
    }, 800);

    return () => clearTimeout(timer);
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.comentario) return;
    
    let hasError = false;
    const newErrors: { nome?: string; email?: string; comentario?: string } = {};

    if (formData.nome.trim().split(/\s+/).filter(Boolean).length < 2) {
      newErrors.nome = 'Digite seu nome completo.';
      hasError = true;
    }
    if (!formData.email.includes('@')) {
      newErrors.email = "O email deve conter um '@'.";
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido.';
      hasError = true;
    }
    if (formData.comentario.trim().split(/\s+/).filter(Boolean).length < 3) {
      newErrors.comentario = 'A mensagem precisa ter no mínimo 3 palavras.';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setIsSubmitting(true);
    
    try {
      // POST para o endpoint local
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        console.error("Erro ao enviar:", result);
        return;
      }
      
      console.log("Sucesso ao enviar:", result);
      setFormData({ nome: '', email: '', comentario: '' });
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    } catch (error) {
      console.error("Erro de requisição:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <img src={heroBg} alt="Background" className="contact-bg" />
      
      <div className="contact-container">
        
        {/* Coluna Esquerda */}
        <div className="contact-left">
          <div className="contact-header">
            <span className="contact-label">Entre em Contato</span>
            <h2 className="contact-title">
              Fale com a gente e transforme seu espaço
            </h2>
            <p className="contact-desc">
              Tem dúvidas ou quer ajuda para escolher suas plantas? Envie uma mensagem e nossa equipe responde rapidamente.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className={`form-group ${errors.nome ? 'has-error' : ''}`}>
              <input 
                type="text" 
                placeholder="Seu nome completo" 
                value={formData.nome}
                onChange={(e) => {
                  setFormData({...formData, nome: e.target.value});
                  if (errors.nome) setErrors(prev => ({...prev, nome: undefined}));
                }}
                disabled={isSubmitting}
                required
              />
              {errors.nome && (
                <span className="error-message">{errors.nome}</span>
              )}
            </div>

            <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
              <input 
                type="email" 
                placeholder="seuemail@email.com" 
                value={formData.email}
                onChange={(e) => {
                  setFormData({...formData, email: e.target.value});
                  if (errors.email) setErrors(prev => ({...prev, email: undefined}));
                }}
                disabled={isSubmitting}
                required
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className={`form-group ${errors.comentario ? 'has-error' : ''}`}>
              <textarea 
                placeholder="Escreva sua mensagem ou dúvida..." 
                value={formData.comentario}
                onChange={(e) => {
                  setFormData({...formData, comentario: e.target.value});
                  if (errors.comentario) setErrors(prev => ({...prev, comentario: undefined}));
                }}
                disabled={isSubmitting}
                required
              ></textarea>
              {errors.comentario && (
                <span className="error-message">{errors.comentario}</span>
              )}
            </div>

            <button 
              type="submit" 
              disabled={
                isSubmitting || 
                !formData.nome || 
                !formData.email || 
                !formData.comentario || 
                Object.keys(errors).filter(k => errors[k as keyof typeof errors]).length > 0
              } 
              className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
            >
              {isSubmitting ? 'Carregando' : 'Enviar mensagem'}
              {isSubmitting && (
                <svg className="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
            </button>
          </form>
        </div>

        {/* Coluna Direita */}
        <div className="contact-right">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.845556355271!2d-46.65327132571467!3d-23.53805666073451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce584099932a93%3A0x8fe0ddd490f13b73!2sR.%20das%20Palmeiras%2C%20123%20-%20Vila%20Buarque%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001226-010!5e0!3m2!1spt-BR!2sbr!4v1778768504720!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{border: 0}} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Blumenau"
            ></iframe>
          </div>
          
          <div className="address-card">
            <div className="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="address-text">
              <strong>Rua das Palmeiras, 123</strong>
              <span>Centro - Blumenau, SC - CEP: 89015-901</span>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-item">
              <div className="icon-circle">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <span className="social-text">(47) 99999-9999</span>
            </a>
            <a href="#" className="social-item">
              <div className="icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <span className="social-text">@casa_botanica</span>
            </a>
            <a href="#" className="social-item">
              <div className="icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </div>
              <span className="social-text">Casa Botânica</span>
            </a>
          </div>
        </div>

      </div>

      {showPopup && (
        <div className="success-popup">
          <svg className="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Mensagem enviada com sucesso!
        </div>
      )}
    </section>
  );
};

export default Contact;
