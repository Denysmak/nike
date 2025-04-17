export const redirectWithUTM = (externalUrl) => {
  const savedUTM = sessionStorage.getItem("utm_params");
  const finalUrl = savedUTM ? `${externalUrl}${savedUTM}` : externalUrl;

  // 1. Adiciona uma rota fictícia ao histórico (como "/exit-redirect")
  window.history.pushState({}, '', '/exit-redirect');
  
  // 2. Redireciona substituindo a rota fictícia (não afeta o histórico da sua app)
  window.location.replace(finalUrl);
  };