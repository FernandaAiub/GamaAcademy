programa {
	funcao inicio() {
		inteiro num, contador, resultado
		
		escreva("Qual tabuada? ")
		leia(num)
		
		para (contador = 0 ; contador <= 10 ; contador = contador + 1){
		    resultado = num * contador
		    escreva(num + " x " + contador + " = " + resultado + "\n")
		}
		
	}
}
