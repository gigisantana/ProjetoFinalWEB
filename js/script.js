const frmPesquisa = document.querySelector("form");
frmPesquisa.onsubmit = (ev) => {
    ev.preventDefault();
    
    const pesquisa = ev.target.pesquisa.value;

    if (pesquisa == "") {
        alert('Informe um nome!');
        return;
    }

    fetch("https://api.pokemontcg.io/v2/cards")
}