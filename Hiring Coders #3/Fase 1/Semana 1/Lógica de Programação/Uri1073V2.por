programa {
	funcao inicio() {
		inteiro n, numero, quadrado
		
		escreva("Digite o n�mero final: ")
		leia(n)
		
		para (numero = 2 ; numero <= n ; numero = numero +2){
		    quadrado = numero * numero
		    escreva(numero + "^2 = " + quadrado + "\n")
		}
	}
}
