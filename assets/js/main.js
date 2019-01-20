/**
 * 
 * Acá va solo el manejo del DOM
 * 
 */
// funcion para pintar las tarjetas con el nombre de cada uno de los personajes
window.onload = () => {

    if (document.getElementById('characters')) {
        const data = window.data.characters;
        const characters_list = document.getElementById('characters');
        drawCards(data, characters_list);
    } else {
        const episodes = window.episodes.episodes;
        const seasons_list = document.getElementById('accordion');
        const seasonFilter = document.getElementById("seasonFilter");
        const seasons = window.getListofSeasons(episodes);
        drawSeasonsFilter(seasons)
        drawSeasons(episodes, seasons_list)

        seasonFilter.addEventListener('change', () => {
            let condition = seasonFilter.value
            let filtered = window.filterSeason(episodes, condition);
            seasons_list.innerHTML = '';
            drawSeasons(filtered, seasons_list);
        })

    }

    //Funciones   
    function drawSeasons(episodes, seasons_list) {
        const seasons_filtered = window.getListofSeasons(episodes);
        drawSeasonsList(seasons_filtered, seasons_list);
        drawEpisodes(episodes)
    }

    function drawSeasonsFilter(data) {
        const seasons_filter = document.getElementById('seasonFilter')
        data.forEach(season => {
            seasons_filter.innerHTML += `<option value="${season}" href="#">Temporada ${season}</option>`
        })
    }

    function drawSeasonsList(datos, seasons_list) {
        seasons_list.innerHTML = '';
        datos.forEach(season => {
            seasons_list.innerHTML += `<div class="card">
            <div class="card-header" role="tab" id="heading${season}">
              <div class="mb-0">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse${season}" aria-expanded="false" aria-controls="collapse${season}" class="collapsed">
                    <h3>Temporada ${season}</h3>
                </a>
              </div>
            </div>
        
            <div id="collapse${season}" class="collapse" role="tabpanel" aria-labelledby="heading${season}" aria-expanded="false" style="">
              <div class="card-block" id="${season}">
              </div>
            </div>
          </div>`;
        });
    }

    function drawEpisodes(episodes) {
        episodes.forEach(episode => {
            document.getElementById(episode.seasonNum).innerHTML += `<div class="card">
            <div class="card-body" >
              <h5 class="card-title">Episodio ${episode.episodeNum}, <strong> "${episode.episodeTitle}"</strong> </h5>
              <p class="card-text">${episode.episodeDescription}</p>
              <p class="card-text"><small class="text-muted">Temporada ${episode.seasonNum}, Lanzamiento: ${episode.episodeAirDate}</small></p>
            </div>
          </div>`;
        })

    }


    function drawCards(datos, characters_list) {
        characters_list.innerHTML = '';

        datos.forEach(character => {
            characters_list.innerHTML += `<div class="col-sm-2">
            <div class="card card-got text-center">
    <img src="${character.characterImageFull}" class="card-img-top" alt="...">
    <div class="card-body card-name">
    <h5 class="card-title">${character.characterName}</h5>
    </div>
    </div>
    </div`;

        });
    }
}



// function drawSeasonsList(datos, seasons_list) {
//     seasons_list.innerHTML = '';
//     datos.forEach(season => {
//         seasons_list.innerHTML += `<div class="card">
//         <div class="card-header" role="tab" id="heading${season}">
//           <h5 class="mb-0">
//             <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${season}" aria-expanded="false"
//               aria-controls="collapse${season}">
//               Temporada ${season}
//             </button>
//           </h5>
//         </div>
//         <div id="collapse${season}" class="collapse" aria-labelledby="heading${season}" data-parent="#accordion">
//           <div class="card-body" id="${season}">
            
//           </div>
//         </div>
//       </div>`;
//     });
// }