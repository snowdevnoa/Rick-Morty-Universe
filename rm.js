class RM {
  async searchCharacters(name) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    const charResponse = await response.json();

    return charResponse.results;
  }
}
