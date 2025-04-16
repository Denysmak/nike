import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useUTMPreserve = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = ["utm_source", "utm_medium", "utm_campaign"]; // Adicione mais se necessário

    // Verifica se já temos UTM na URL
    const hasUTM = utmParams.some(param => urlParams.has(param));

    if (hasUTM) {
      // Salva os parâmetros UTM no sessionStorage
      sessionStorage.setItem("utm_params", window.location.search);
    } else {
      // Se não houver UTM na URL, tenta recuperar do sessionStorage
      const savedUTM = sessionStorage.getItem("utm_params");
      if (savedUTM && location.search === "") {
        // Redireciona para a mesma rota com os parâmetros UTM salvos
        navigate(location.pathname + savedUTM, { replace: true });
      }
    }
  }, [location, navigate]);
};

export default useUTMPreserve;