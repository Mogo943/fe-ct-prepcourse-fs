function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var total = 0;
  resultadosTest.forEach(element => {
    total += element;
  });

  return total / resultadosTest.length
}

module.exports = promedioResultadosTest;
