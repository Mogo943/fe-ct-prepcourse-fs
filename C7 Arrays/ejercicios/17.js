function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var result = 0;
  arrayOfNums.forEach(element => {
    result += element;
  });

  return result;
}

module.exports = agregarNumeros;
