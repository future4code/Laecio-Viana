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


 let jogador1 = "Usuário"
 let jogador2 = "Computador"
 let pontuacaoUsuario = 0
 let pontuacaoComputador = 0

 
 //mensagem de boas vindas ao jogo
 console.log("Bem Vindo ao jogo de BlackJack!");


 //mensagem solicitando ao usuário se ele quer jogar ou não
 if (confirm("Gostaria de iniciar uma nova rodada?")){
   //iniciar rodada se usuário digitar ok   

   //variáveis que armazenam os arrays com as cartas do usuário e do computador retornada através da chamada da função
      let arrayCartasUsuario = pegarCartasUsuario();
      let arrayCartasComputador = pegarCartasComputador();

      //laço de repetição para percorrer os elementos do array
       for(let indice = 0; indice <= 1;  indice++){
          //soma das pontuações do usuário e do computador 
          pontuacaoUsuario += arrayCartasUsuario[indice].valor;
          pontuacaoComputador += arrayCartasComputador[indice].valor;
      } 
       

      //mensagem informando as cartas do usuário e sua pontuação e também as cartas do computador e sua pontuação
      console.log(jogador1 + " - cartas:  " + arrayCartasUsuario[0].texto + " " +  arrayCartasUsuario[1].texto + " - Pontuacao " + pontuacaoUsuario);
      console.log(jogador2 + " - cartas:  " + arrayCartasComputador[0].texto + " " +  arrayCartasComputador[1].texto + " - Pontuacao " + pontuacaoComputador);
      
      //condicional verificando a pontuação entre os jogadores e mostrando quem foi o vencedor ou foi empate
      if(pontuacaoUsuario > pontuacaoComputador){
          console.log("O usuário ganhou");
      } else if (pontuacaoUsuario < pontuacaoComputador){
          console.log("O computador ganhou");
      } else {
         console.log("Empate");
      }
       

  
 } else {
    //mensagem de finalização do jogo se o usuário digitar cancelar
    console.log("O jogo acabou");
 }


 // função que retorna um array com as cartas do usuário
 function pegarCartasUsuario () {
    let cartasUsuario = [];

    for(let i = 0 ; i <= 1; i++){
      const carta = comprarCarta();
      cartasUsuario.push(carta);
    }

    return cartasUsuario
 }

 //função que retorna um array com as cartas do computador
 function pegarCartasComputador () {
   let cartasComputador = [];

   for(let i = 0 ; i <= 1; i++){
     const carta = comprarCarta();
     cartasComputador.push(carta);
   }

   return cartasComputador
}