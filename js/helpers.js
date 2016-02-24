
/**
* [Retourne l'index d'un objet à partir d'une clé / valeur]
* @param  {[object]} data [l'objet dans lequel on cherche]
* @param  {[string]} property [la Clé que l'on cherche]
* @param  {[type]} value [la valeur de la clé cherché]
* @return {[int]} [Retourne l'index de l'objet]
*/
function findIndexInData(data, property, value) {
  for(var i = 0, l = data.length ; i < l ; i++) {
    if(data[i][property] === value) {
      return i;
    }
  }
  return -1;
}
