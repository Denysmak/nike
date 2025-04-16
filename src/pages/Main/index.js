import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router'
import Header from '../../componentes/header/Header';
import './styles.css';

import Logo from '../../assets/logo.png';

import MainImage from '../../assets/carousel/main.jpeg';
import Image1 from '../../assets/carousel/1.jpg';
import Image2 from '../../assets/carousel/2.jpg';
import Image3 from '../../assets/carousel/3.jpg';
import Image4 from '../../assets/carousel/4.jpg';
import Image5 from '../../assets/carousel/5.jpg';
import Image6 from '../../assets/carousel/6.jpg';
import Image7 from '../../assets/carousel/7.jpg';
import Image8 from '../../assets/carousel/8.jpg';

import Comment1 from '../../assets/avaliacaoCamisa1.webp';
import Comment2 from '../../assets/avaliacaoTenis1.webp';
import Comment3 from '../../assets/avaliacaoTenis2.webp';

import ShortLogo from '../../assets/logoNikeNoBackground.png';

export default function Main() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300);
  const [currentImage, setCurrentImage] = useState(MainImage);
  const [activeIndex, setActiveIndex] = useState(0);
  const [, setAnswers] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showModalGifts, setShowModalGifts] = useState(false);
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [attempts, setAttempts] = useState(3);
  const navigate = useNavigate();

  const images = [
    MainImage,
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8
  ];

  const questions = [
    {
      id: 1,
      text: "¿Eres hombre o mujer?",
      options: ["Hombre", "Mujer"]
    },
    {
      id: 2,
      text: "¿Cuántos años tienes?",
      options: ["18-29", "30-39", "40-49", "50+"]
    },
    {
      id: 3,
      text: "¿Compras frecuentemente en línea?",
      options: ["Siempre", "A veces", "Nunca"]
    },
    {
      id: 4,
      text: "¿Con qué frecuencia te encuentras con falta de información (por ejemplo, fotos, características, opiniones)?",
      options: ["Nunca", "Rara vez", "A veces", "Muy a menudo"]
    },
    {
      id: 5,
      text: "¿Cómo calificarías tu experiencia general en Nike?",
      options: ["Positiva", "Negativa"]
    }
  ];



  const handleThumbnailClick = (image, index) => {
    setCurrentImage(image);
    setActiveIndex(index);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleAnswer = (answer) => {
    setAnswers(prev => ({...prev, [currentQuestion]: answer}));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowModal(true);
    }
  };
  useEffect(() => {
    if (showModal) {
      // Configura um timeout para fechar o modal e navegar após 2 segundos
      const timer = setTimeout(() => {
        setShowModal(false); // Fecha o modal
        navigate('/presents'); // Navega para a rota /presents
      }, 2000); // 2 segundos

      // Limpa o timeout se o componente for desmontado
      return () => clearTimeout(timer);
    }
  }, [showModal, navigate]);

  useEffect(() => {
    if (timeLeft <= 1) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="rate-star">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <>
    <Header/>
      <main>
        <div className="carousel-container">
          <div className="main-content">
            <div className="thumbnails">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className={`thumbnail ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => handleThumbnailClick(image, index)}
                  alt={`Miniatura ${index + 1}`}
                />
              ))}
            </div>
            <div className="main-image-container">
              <img 
                src={currentImage} 
                className="main-image" 
                alt="Imagem principal" 
              />
            </div>
            <div className="description-container">
              <h2 className="product-title">Obtén tu Caja Misteriosa</h2>
              <h3><p className='product-price-old'><s>$ 99</s></p><p className='product-price-new'>$ Sin costo</p></h3>
              <p className="product-description">
                Para atraer nuevos clientes, lanzamos una nueva promoción. ¡Solo los primeros 100 participantes tendrán la oportunidad de ganar una caja misteriosa de Nike! Si el contenido de tu caja no te gusta, puedes devolverla y recibir una nueva. Hoy, estás invitado a participar en este concurso. Las fichas de producto muestran ejemplos de lo que podría estar en tu caja. Así es como funciona: responde a 5 preguntas simples y recibe una caja misteriosa de Nike.
              </p>
              <div className="timer">
                <span className="timer-label">La oferta termina en</span>
                <span className="timer-value">{formatTime(timeLeft)}</span>
              </div>

              <div className="form-questions">
                <h2 className="question">
                  Pergunta {currentQuestion + 1} de {questions.length}: {questions[currentQuestion].text}
                </h2>

                <div className="awsner">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section class="rate">
          <img src={ShortLogo} alt="Rate" />
          <p>Política de Reseñas de Clientes.</p>
          <section className='rate-stars'>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <p>4.86</p>
          </section>
      </section>

      <section className='comments'>
        <p className='comments-title'>Comentarios del cliente</p>

        <div className='comment'>
          <div className='comment-user-info'>
            <p className='user-name'>José García</p>
            <p className='user-number-comments'>(37 comentarios)</p>
          </div>

          <div className='user-rate-stars'>
            <div className='stars'>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>

            <p className='time'>
              Hace 2 horas.
            </p>
          </div>

          <div className='user-comment'>
            <p className='user-comment-text'>No lo podía creer cuando abrí el paquete y vi la camiseta Nike! El diseño es simplemente espectacular, y la calidad superó todas mis expectativas. ¡Lo recomiendo a todos!</p>
            <img src={Comment1} alt="PlayStation 5" />
          </div>
        </div>

        <div className='comment'>
          <div className='comment-user-info'>
            <p className='user-name'>Juan Martínez</p>
            <p className='user-number-comments'>(12 comentarios)</p>
          </div>

          <div className='user-rate-stars'>
            <div className='stars'>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>

            <p className='time'>
              Hace 1 día.
            </p>
          </div>

          <div className='user-comment'>
            <p className='user-comment-text'>Nunca imaginé que un regalo pudiera sorprenderme tanto. ¡Cuando abrí la caja y vi los tenis Nike, casi no lo podía creer! Fue una de las mejores sorpresas de mi vida. Comodísimos, con estilo y de una calidad increíble.</p>
            <img src={Comment2} alt="PlayStation 5" />
          </div>
        </div>

        <div className='comment'>
          <div className='comment-user-info'>
            <p className='user-name'>María Rodríguez</p>
          </div>

          <div className='user-rate-stars'>
            <div className='stars'>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>

            <p className='time'>
              Hace 1 día.
            </p>
          </div>

          <div className='user-comment'>
            <img src={Comment3} alt="PlayStation 5" />
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal">
          <div className="modal-body">
            <div className='loader'></div>
            <h3>
             Análisis de respuestas
            </h3>
            <p>
            Respuestas a las preguntas 5/5
            </p>
           
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
      )}

      
    </>
  );
}