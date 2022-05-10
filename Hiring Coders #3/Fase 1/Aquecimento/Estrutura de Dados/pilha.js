var elementos = []
var topo = -1
const MAX = 10

function push(num) {
  if (topo < MAX) {
    topo = topo + 1
    elementos[topo] = num
  } else {
    console.log('Pilha está cheia!')
  }
}

function estaVazia() {
  return topo == -1
}

function pop() {
  if (topo != -1) {
    let num = elementos[topo]
    topo = topo - 1
    return num
  } else {
    console.log('Pilha está vazia!')
  }
}

// --------- parte do código que usa a pilha --------- //

// exemplo 1 - testa as funções //
push(10)
push(20)
push(30)

console.log(elementos)

console.log(pop())
console.log(pop())
console.log(pop())

// exemplo 2 - armazena os restos da divisão de um número por dois em uma pilha e depois desempilha o que foi armazenado //

var numDecimal = 10
var resto

console.log('Hora de empilhar!')
while (numDecimal != 0) {
  resto = parseInt(numDecimal % 2)
  push(resto)
  console.log(resto)
  numDecimal = parseInt(numDecimal / 2)
}

console.log('Desempilhando tudooooooooo...')
while (!estaVazia()) {
  console.log(pop())
}
