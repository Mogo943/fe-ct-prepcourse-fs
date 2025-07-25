function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if(array.length == 0 || array.length == 1) return 0
  var max = Number.MIN_SAFE_INTEGER; var pos = -1;
  for(var i = 0; i < array.length; i++){
    if(array[i] > max){
      max = array[i]
      pos = i
    }
  }
  return pos
}

module.exports = encontrarIndiceMayor;
