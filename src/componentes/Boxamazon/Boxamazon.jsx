import { useState } from 'react';
import './style.css';
import boximagem from '../../assets/boxNike.png';

export default function Boxamazon({ onClick }) {
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = () => {
    setIsShaking(true);
    // Chama a função do pai, se existir
    if (onClick) {
      onClick();
    }
    setTimeout(() => setIsShaking(false), 500); // Remove o efeito após 500ms
  };

  return (
    <div className='imageContainer' onClick={handleClick}>
      <img className={`boximage ${isShaking ? 'shake' : ''}`} src={boximagem} alt="Caixa Amazon" />
    </div>
  );
}
