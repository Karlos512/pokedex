document.querySelector('#buscar').addEventListener('click', function(){
    getNewPokemon();
});

control = setInterval(() => {
    getNewPokemon();
}, 30000);

function getNewPokemon(){
    let id = Math.floor(Math.random() * 50);
    let foto_pokemon=document.getElementById('foto')
    let name=document.getElementById('name')
    let info=document.getElementById('info')

    let xhttp=new XMLHttpRequest()
    xhttp.open("GET",`https://pokeapi.co/api/v2/pokemon/${ id }`)
    xhttp.send()

    xhttp.onreadystatechange=function () {
        if(this.readyState==4 && this.status==200)
        {
        let Pokemon=JSON.parse( this.responseText)
        
        foto_pokemon.setAttribute("src",Pokemon.sprites.front_default)
        name.textContent=Pokemon.name.toUpperCase();
        info.textContent='Algunos de los movimientos de '+Pokemon.name+' son '+Pokemon.moves[1].move.name+' y '+Pokemon.moves[2].move.name
        }
    }
}
