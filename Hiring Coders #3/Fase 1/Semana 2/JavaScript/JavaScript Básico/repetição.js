// Exemplo for: número sorteado

var numeroSorteado = 9

for (var i = 0; i < 100; i++) {
  if (numeroSorteado === i) {
    console.log('Seu número foi encontrado!')
    break
  }
}

// Exemplo for: tabuada

var tabuada = 7

for (var i = 0; i <= 10; i++) {
  console.log('O valor de ' + tabuada + 'x' + i + ' = ' + tabuada * i)
}
