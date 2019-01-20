/**
 * 
 * Acá va solo la lógica
 * 
 */

const getListofSeasons = (data) => {
    return data.reduce(function (carry, item) {
        if (item['seasonNum'] && !~carry.indexOf(item['seasonNum'])) carry.push(item['seasonNum']);
        return carry;
    }, []);
}

window.getListofSeasons = getListofSeasons;

// funcion para filtrar
const filterSeason = (data, condition) => {
    if (condition == "all") {
      return data;
    }
    const filteredType = data.filter(element => {
      return element.seasonNum == condition;
    })
    return filteredType;
  }
  
  window.filterSeason = filterSeason;