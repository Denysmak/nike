export const redirectWithUTM = (externalUrl) => {
    // Recupera os parâmetros UTM salvos no sessionStorage
    const savedUTM = sessionStorage.getItem("utm_params");
  
    // Constrói a URL final com os parâmetros UTM
    const finalUrl = savedUTM ? `${externalUrl}${savedUTM}` : externalUrl;
  
    // Redireciona para a URL externa
    window.location.href = finalUrl;
  };