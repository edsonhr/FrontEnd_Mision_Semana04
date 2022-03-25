//Funcion para consultar pokemones
const fetchPokemon = () => {

    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();

    const url = 'https://pokeapi.co/api/v2/pokemon/'+pokeInput;

    fetch(url).then((res) => {
        if (res.status != "200")
        {
            pokeImage("./pikachusad.png");
        }
        else
        {
            return res.json();
        }        
    }).then((data) => {
        console.log(data);

        let pokeImg = data.sprites.front_default;
        let pokeNombre = data.name;
        let pokeTipo = data.types[0].type.name;
        let pokeEstadisticas = data.stats;
        let pokeMovimientos = data.moves;

        console.log(pokeImg);
        console.log(pokeNombre);
        console.log(pokeTipo);
        //Pruebas para imprimir estadisticas por separado
        for (var i=0; i <3; i++)
        {
            console.log(pokeEstadisticas[i].base_stat);
        }
        //console.log(pokeEstadisticas);
        console.log(pokeMovimientos);
        pokeImage(pokeImg);
    })
}

//Funcion para obtener la imagen del pokemon
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src =  url;
}