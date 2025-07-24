function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  var contador = 0;
  while(num != 0){
    num = Math.floor(num / 10)
    contador++;
  }
  return contador == 3;
}

module.exports = tieneTresDigitos;
