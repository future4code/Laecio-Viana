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

console.log("Bem vindo ao jogo de BlackJack");

//pergunta se o usuário quer jogar uma partida
if (confirm("Gostaria de jogar uma partida?")) {
   //código realizado se o usuário clicar no ok

      //duas primeiras cartas do usuário e do computador
      let primeiraCartaUsuario =  comprarCarta(); 
      let segundaCartaUsuario =   comprarCarta();
      let primeiraCartaComputador = comprarCarta();
      let segundaCartaComputador = comprarCarta();

      
      //mensagens para mostrar as cartas do usuário e do computador para verificar se foram mudadas depois
      console.log("CARTAS USUÁRIO");
      console.log(primeiraCartaUsuario.texto);
      console.log(segundaCartaUsuario.texto);
      console.log("CARTAS COMPUTADOR");
      console.log(primeiraCartaComputador.texto);
      console.log(segundaCartaComputador.texto);

      //verificação se ambas as cartas do usuário ou ambas as cartas do computador são ases 
      //usando como comparação o seu valor que corresponde ao 11 
      if (primeiraCartaUsuario.valor === 11  && segundaCartaUsuario.valor === 11 || primeiraCartaComputador.valor === 11 
          && segundaCartaComputador.valor  === 11 )  {
          
         //nova compra de cartas do usuário e do computador
          primeiraCartaUsuario = comprarCarta();
          segundaCartaUsuario = comprarCarta();
          primeiraCartaComputador = comprarCarta();
          segundaCartaComputador = comprarCarta();

             
      }
      

      //Definição das pontuações do usuário e do computador
      let pontuacaoUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor;
      let pontuacaoComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor;
     
      //mensagem informando as cartas do usuário e sua pontuação e também as cartas do computador e sua pontuação
      console.log("Usuário - cartas : " , primeiraCartaUsuario.texto , segundaCartaUsuario.texto , "Pontuação : " , pontuacaoUsuario);
      console.log("Computador - cartas : " , primeiraCartaComputador.texto , segundaCartaComputador.texto , "Pontuação : " , pontuacaoComputador);
      
       //condicional verificando a pontuação entre os jogadores e mostrando quem foi o vencedor ou  se foi empate
      if (pontuacaoUsuario > pontuacaoComputador) {
         console.log(" O Usuário venceu o jogo");
      } else  if (pontuacaoUsuario < pontuacaoComputador){
         console.log("O Computador venceu o jogo")
      } else {
         console.log("Empate !");
      }
} else {
   //mensagem no console se o usuário clicou no cancelar
   console.log("O jogo acabou!");
}

