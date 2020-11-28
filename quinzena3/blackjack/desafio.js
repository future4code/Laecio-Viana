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

console.log("Bem vindo ao jogo de BlackJack");

if (confirm("Gostaria de jogar uma partida?")) {
      let primeiraCartaUsuario =  comprarCarta(); 
      let segundaCartaUsuario =   comprarCarta();
      let primeiraCartaComputador = comprarCarta();
      let segundaCartaComputador = comprarCarta();

      
      
      console.log("CARTAS USUÁRIO");
      console.log(primeiraCartaUsuario.texto);
      console.log(segundaCartaUsuario.texto);
      console.log("CARTAS COMPUTADOR");
      console.log(primeiraCartaComputador.texto);
      console.log(segundaCartaComputador.texto);

      if (primeiraCartaUsuario.valor === 11  && segundaCartaUsuario.valor === 11 || primeiraCartaComputador.valor === 11 
          && segundaCartaComputador.valor  === 11 )  {
          
          primeiraCartaUsuario = comprarCarta();
          segundaCartaUsuario = comprarCarta();
          primeiraCartaComputador = comprarCarta();
          segundaCartaComputador = comprarCarta();

             
      }

      let pontuacaoUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor;
      let pontuacaoComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor;

      console.log("Usuário - cartas : " , primeiraCartaUsuario.texto , segundaCartaUsuario.texto , "Pontuação : " , pontuacaoUsuario);
      console.log("Computador - cartas : " , primeiraCartaComputador.texto , segundaCartaComputador.texto , "Pontuação : " , pontuacaoComputador);

      if (pontuacaoUsuario > pontuacaoComputador) {
         console.log(" O Usuário venceu o jogo");
      } else  if (pontuacaoUsuario < pontuacaoComputador){
         console.log("O Computador venceu o jogo")
      } else {
         console.log("Empate !");
      }
} else {
   console.log("O jogo acabou!");
}

