programa {
	funcao inicio() {
		real nota1, nota2, media
		
		escreva("Digite a nota 1: ")
		leia(nota1)
		escreva("Digite a nota 2: ")
		leia(nota2)
		
		media = (nota1 + nota2)/2
		
		escreva("A m�dia �: " + media + ".\n")
		
		se (media >= 7.0){
		    escreva("Parab�ns, voc� foi aprovado(a)!\n")
		}
		senao{
		    escreva("Voc� foi reprovado, nos vemos ano que vem!\n")
		}
	}
}
