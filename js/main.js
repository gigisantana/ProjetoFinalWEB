pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon) => `
    <li class="pokemon ${pokemon.type}" id="pokemon">
    <div class="pokeinfo">              
        <span class="name" style="font-weight: bold;">${pokemon.name}</span>
        <span class="number">#${pokemon.number}</span>
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
        </ol>
    </div> 
    <div class="pokeimg">
        <img src="assets/img/pokemons/poke_${pokemon.id}.gif" alt="">
        <img class="imgbackground" src="https://pokemoncalc.web.app/en/assets/pokeball.svg" alt="${pokemon.name}">
    </div>
    
    </li>
    `).join('')
    pokelist.innerHTML += newHtml
    

})