import Congrutulations from '../../assets/congrulations.png';

import Header from '../../componentes/header/Header';
import './styles.css';

export default function Congratulations() {
  return (
    <>
      <Header />

      
      <section class="congratulations">
        <img src={Congrutulations} alt="¡Felicidades! ¡Ganaste!" />
      </section>
    </>
  )
}