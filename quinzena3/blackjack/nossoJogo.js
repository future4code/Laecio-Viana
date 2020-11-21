/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 //mensagem de boas vindas ao jogo
 console.log("Bem Vindo ao jogo de BlackJack!");


 //mensagem solicitando ao usuário se ele quer jogar ou não
 if (confirm("Gostaria de iniciar uma nova rodada?")){
   //iniciar rodada se usuário digitar ok
  
 } else {
    //mensagem de finalização do jogo se o usuário digitar cancelar
    console.log("O jogo acabou");
 }

 