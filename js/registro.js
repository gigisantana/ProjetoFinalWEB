/*formulario.addEventListener("submit", (event) => {
    let nome = document.querySelector("#nome");
    let tipo = document.querySelector("#tipo");
    let data = document.querySelector("#data");
    let pontocombate = document.querySelector("#pontocombate");
  
    if (validarDados(nome, tipo, data, pontocombate)) {
      let registrado = {
        nome: nome.value.trim(),
        tipo: tipo.value.trim(),
        data: data.value.trim(),
        pontocombate: pontocombate.value.trim(),
        idAnimal: sessionStorage.getItem("idAnimal"),
      };
  
      let registradoJson = JSON.stringify(registrado);
      console.log(registradoJson);
  
      let registrado2 = JSON.parse(registradoJson);
      console.log(registrado2);
    } else event.preventDefault();
  });
*/
function registroPokemon() {
    const form = document.getElementById('pokemonForm');
    const nome = form.elements['nomeInput'].value.toLowerCase();
    const dataRegistro = form.elements['dataInput'].value;
    const pc = form.elements['pcInput'].value;

    if (nome && dataRegistro && pc) {
      const selectedTypes = [];
      const typeCheckboxes = form.elements['type'];
      for (const checkbox of typeCheckboxes) {
          if (checkbox.checked) {
              selectedTypes.push(checkbox.value);
          }
      }
      const pokemonData = {
        nome: nomePokemon,
        types: selectedTypes,
        data_Registro: dataRegistro,
        pc: pc,
    };

        console.log('Pokémon registrado:', pokemonData);
        alert('Registrado com sucesso!');
        // Limpar o formulário
        form.reset();
    } else {
        alert('Preencha todos os campos para registrar seu Pokémon!');
    }
}
