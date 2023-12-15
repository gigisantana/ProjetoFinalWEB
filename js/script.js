let listaPokemon = [
  {
    idPokemon: 1,
    nome: "Bulbasaur",
    descricao:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam     nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper",
    img: "./img/001.png",
  },
  {
    idPokemon: 4,
    nome: "Charmander",
    descricao:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam     nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper",
    img: "./img/004.png",
  },
  {
    idPokemon: 3,
    nome: "Squirtle",
    descricao:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam     nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper",
    img: "./img/007.png",
  },
  {
    idPokemon: 25,
    nome: "Pikachu",
    descricao:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam     nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper",
    img: "./img/025.png",
  },
];

const criarCards = () => {
  let container = document.querySelector(".container");

  listaAnimais.forEach((elemento) => {
    let card = `
        <div class="card">
            <img class="card-img" src="${elemento.img}" />
            <h2 class="card-titulo">${elemento.nome}</h2>
            <p class="card-descricao"> ${elemento.descricao}</p>
            <a class="card-botao" idPokemon="${elemento.idPokemon}"> REGISTRAR </a>
        </div>
    `;
    container.innerHTML += card;
  });
};

window.addEventListener("load", () => {
  criarCards();

  let cards = document.querySelectorAll(".card");
  cards.forEach((elemento) => {
    elemento.addEventListener("mouseover", () => {
      elemento.classList.add("change-scale");
    });

    elemento.addEventListener("mouseout", () => {
      elemento.classList.remove("change-scale");
    });

    elemento.lastElementChild.addEventListener("click", (event) => {
      event.preventDefault();

      let animalSelecionado =
        elemento.lastElementChild.getAttribute("idPokemon");
      sessionStorage.setItem("idPokemon", animalSelecionado);
      document.cookie = `idPokemon=${animalSelecionado}`;
      window.location.href = "./registro.html";
    });
  });
});

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
/*function loadPokemonList() {
  const pokemonListContainer = document.getElementById('pokemonList');
  
  const registeredPokemonList = loadRegisteredPokemonList();
  
  pokemonListContainer.innerHTML = "";

  // Loop sobre a lista de Pokémon e exibir cada um como um card
  registeredPokemonList.forEach(pokemon => {
      const card = createPokemonCard(pokemon);
      pokemonListContainer.appendChild(card);
  });
}*/


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
