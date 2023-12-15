
//GET
function searchPokemon() {
  const inputElement = document.getElementById('pokemonInput');
  const pokemonName = inputElement.value.toLowerCase();

  if (pokemonName) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
          .then(response => response.json())
          .then(data => displayPokemon(data))
          .catch(error => console.error('Error:', error));
  } else {
      alert('Digite o nome do Pokémon antes de pesquisar.');
  }
}

function displayPokemon(pokemon) {
  const detailsContainer = document.getElementById('pokemonDetails');
  detailsContainer.innerHTML = `
      <h2>${pokemon.name}</h2>
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <p>Altura: ${pokemon.height} decímetros</p>
      <p>Peso: ${pokemon.weight} hectogramas</p>
  `;
}

// carrega e exibe a lista de Pokémon registrados
function loadPokemonList() {
  const pokemonListContainer = document.getElementById('pokemonList');
  
  const registeredPokemonList = loadRegisteredPokemonList();
  
  pokemonListContainer.innerHTML = "";

  // Loop sobre a lista de Pokémon e exibir cada um como um card
  registeredPokemonList.forEach(pokemon => {
      const card = createPokemonCard(pokemon);
      pokemonListContainer.appendChild(card);
  });
}

// função para carregar a lista
function loadRegisteredPokemonList() {
  const registeredPokemonListJSON = localStorage.getItem('registeredPokemonList');
  return JSON.parse(registeredPokemonListJSON) || [];
}

// função para salvar a lista
function saveRegisteredPokemonList(list) {
  const listJSON = JSON.stringify(list);
  localStorage.setItem('registeredPokemonList', listJSON);
}

// função para deletar um Pokémon da lista
function deletePokemon(pokemonName) {
  const registeredPokemonList = loadRegisteredPokemonList();

  // encontre e remova o Pokémon com o nome correspondente
  const updatedPokemonList = registeredPokemonList.filter(pokemon => pokemon.name !== pokemonName);

  saveRegisteredPokemonList(updatedPokemonList);

  loadPokemonList();
}

loadPokemonList();
