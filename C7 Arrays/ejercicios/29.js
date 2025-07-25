function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:

  if(numeros.length == 0) return null;

  for(var i = 0; i < numeros.length - 1; i++){
    var actual = numeros[i];
    var siguiente = numeros[i+1];
    if(siguiente != actual + 1){
      return actual + 1;
    }
  }

  return null;
}

module.exports = encontrarNumeroFaltante;