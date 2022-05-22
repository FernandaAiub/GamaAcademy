// Exemplo 1: if, else if, else

var nome = 'Fernanda'

if (nome === 'Fernanda') {
  console.log('Legal! Seu nome é este mesmo!')
} else if (nome === 'Aiub') {
  console.log('Tudo bem! Você também serve!')
} else {
  console.log('Que pena! Seu nome não é Fernanda!')
}

// Exemplo 2: switch

var nome = 'Adriana'

switch (nome) {
  case 'Fernanda':
    console.log('Legal! Seu nome é este mesmo!')
    break
  case 'Aiub':
    console.log('Tudo bem! Você também serve!')
    break
  default:
    console.log('Que pena! Você não é quem estou procurando!')
    break
}
