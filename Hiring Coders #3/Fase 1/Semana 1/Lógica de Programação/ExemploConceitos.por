programa {
	funcao inicio() {
		real nota1, nota2, media
		
		escreva("Digite a nota 1: ")
		leia(nota1)
		escreva("Digite a nota 2: ")
		leia(nota2)
		
		media = (nota1 + nota2)/2
		escreva("A m�dia �: " + media + ".\n")
		
		se (media > 9 e media <=10){                 // vou testar se � conceito A
		    escreva("conceito A")
		}
		senao {                                      // ainda pode ser B, C, D ou R
		    se (media >= 8 e media < 9){            // testei se � B
		        escreva("conceito B")
		    }
		    senao{                                  // ainda pode ser C, D ou R
		        se (media >= 6 e media < 8){        // testei se � C
		            escreva("conceito C")
		        }
		        senao{                              // ainda pode ser D ou R
		            se (media >= 5 e media < 6){    // testei se � D
		                escreva("conceito D")
		            }
		            senao{                          // s� pode ser R
		                escreva("Reprovado!")
		            }
		        }
		    }
		}
	}
}
