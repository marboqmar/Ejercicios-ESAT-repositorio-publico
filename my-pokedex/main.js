import { gettingData } from "./src/pokemonData.js";

async function init () {
   let normalisedPokemonData = await gettingData();
   console.log(normalisedPokemonData)

   let html = '';

   const renderPokemon = (pokemonToRender) => {
      pokemonToRender.forEach((pokemon, index) => {
         html = html + `<div class="pokemon">
             <a href="/src/pokemonDetails/pokemonDetails.html?pokemonId=${pokemon.id}">
             <p>${pokemon.name}</p>
             <img src="${pokemon.img}">
          </div>`
      });

      document.querySelector('.pokemonDisplay').innerHTML = html;
   }

   renderPokemon(normalisedPokemonData)

   document.querySelector('#searchPokemon').addEventListener('input', (event) => {
      const filteredPokemon = normalisedPokemonData.filter((pokemonItem) => {
         return pokemonItem.name.includes(event.target.value);
      });

      renderPokemon(filteredPokemon);
   });
}

init()

// document.querySelector('body').addEventListener('load', function () {
//    init();
// });