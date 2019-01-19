/**
 * 
 * Acá va solo el manejo del DOM
 * 
 */
// funcion para pintar las tarjetas con el nombre de cada uno de los personajes
window.onload = () => {

    const data = window.data.characters;
    const characters_list = document.getElementById('characters');
    drawCards(data);


    function drawCards(datos) {
        characters_list.innerHTML = '';

        datos.forEach(character => {
            characters_list.innerHTML += `<div class="card">
    <img src="${character.characterImageThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${character.characterName}</h5>
    </div>
    </div`;

        });
    }
}

