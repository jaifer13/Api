export async function fetchCountries() {
    try {
      const response = await fetch('paises-gentilicos-google-maps.json');
      if (!response.ok) throw new Error('Erro ao buscar países.');
      const countries = await response.json();
      console.log(countries)
      return countries;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  