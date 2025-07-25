function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  for(let i = 0; i < Math.floor(array.length / 2); i++){
    var temp = array[i];
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = temp
  }
  return array
}

module.exports = invertirArray;
