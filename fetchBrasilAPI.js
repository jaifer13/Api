export async function fetchBrasilAPI(endpoint, query) {
    try {
      const response = await fetch(`https://brasilapi.com.br/api/${endpoint}/v1/${query}`);
      if (!response.ok) throw new Error('Erro na consulta à BrasilAPI.');
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  