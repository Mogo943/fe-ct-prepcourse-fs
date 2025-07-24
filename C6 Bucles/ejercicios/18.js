function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var result = 1;

  if(a > b){
    var temp = a;
    a = b;
    b = temp;
  }

  for(var i = a; i <= b; i++){
    result *= i;
  }

  return result === 0 ? 0 : result;
}

console.log(productoEntreNúmeros(-5,5))

module.exports = productoEntreNúmeros;