//Funcion para consultar pokemones
const fetchPokemon = () => {

    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();

    const url = 'https://pokeapi.co/api/v2/pokemon/'+pokeInput;

    fetch(url).then((res) => {
        if (res.status != "200")
        {
            pokeImage("./pikachusad.gif");
            document.getElementById("pokeNombre").innerHTML= "Todavía no lo crean";
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

        pokeNombrePokemon(pokeNombre);
        pokeImage(pokeImg);
        pokeTipoPokemon(pokeTipo);
        pokeEstadisticasPokemon(pokeEstadisticas);
        pokeMovimientosPokemon(pokeMovimientos);
    })
}

//Funcion para obtener el nombre del pokemon
const pokeNombrePokemon = (pokeNombre) => {
    document.getElementById("pokeNombre").innerHTML= pokeNombre;
}

//Funcion obtener la imagen del pokemon
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src =  url;
}

//Funcion para obtener el tipo de pokemon
const pokeTipoPokemon = (pokeTipo) => {
    document.getElementById("pokeTipo").innerHTML=pokeTipo;
}

//Funcion para obtener estadisticas del pokemon
const pokeEstadisticasPokemon = (pokeEstadisticas) => {
    var new_div = document.createElement("div");
    var espacio = document.createElement("br");

    let tam = Object.keys(pokeEstadisticas).length; //Obtengo el tamaño del objeto
        for (var i=0; i < tam; i++)
        {
            var content = document.createTextNode("Esfuerzo: " + pokeEstadisticas[i].effort);       
            new_div.appendChild(content);                                     
            document.getElementById("estadisticas").appendChild(new_div);
            
            var content = document.createTextNode("Nombre: " + pokeEstadisticas[i].stat.name);       
            new_div.appendChild(content);                                         
            document.getElementById("estadisticas").appendChild(new_div);

            document.getElementById("estadisticas").appendChild(espacio);
        }
}

//Funcion para obtener movimientos del pokemon
const pokeMovimientosPokemon = (pokeMovimientos) => {
    var new_div = document.createElement("div");

    let tam = Object.keys(pokeMovimientos).length; //Obtengo el tamaño del objeto
        for (var i=0; i < 10; i++)
        {
            var content = document.createTextNode(pokeMovimientos[i].move.name);      
            new_div.appendChild(content);                                     
            document.getElementById("movimientos").appendChild(new_div);
        }
}