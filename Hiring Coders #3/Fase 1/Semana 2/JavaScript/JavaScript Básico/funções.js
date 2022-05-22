function soma(operadorA, operadorB) {
  var resultado = operadorA + operadorB
  return resultado
}

function olaGama(nome) {
  console.log('Olá, Gama! Você é o ' + nome)
}

var resultadoDaSoma = soma(1, 2)
var resultadoNovoDaSoma = soma(9, 54)

console.log(resultadoDaSoma)
console.log(resultadoNovoDaSoma)

olaGama('Giovanni')
