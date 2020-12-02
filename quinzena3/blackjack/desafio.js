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


 let pontuacaoUsuario = 0
 let pontuacaoComputador = 0

 let arrayCartasUsuario = []
 let arrayCartasComputador = []

 let cartaUsuario
 let cartaComputador
 
 //mensagem de boas vindas ao jogo

console.log("Bem vindo ao jogo de BlackJack");

//pergunta se o usuário quer jogar uma partida
if (confirm("Gostaria de jogar uma partida?")) {
   //código realizado se o usuário clicar no ok

      //duas primeiras cartas do usuário e do computador
      for (let indice = 0; indice <= 1 ; indice++){
          cartaUsuario = comprarCarta();
          cartaComputador = comprarCarta();
          arrayCartasUsuario.push(cartaUsuario);
          arrayCartasComputador.push(cartaComputador);  

      }

      
      

      //verificação se ambas as cartas do usuário ou ambas as cartas do computador são ases 
      //usando como comparação o seu valor que corresponde ao 11 
      if (arrayCartasUsuario[0].valor === 11  && arrayCartasUsuario[1].valor === 11 || arrayCartasComputador[0].valor === 11 
          && arrayCartasComputador[1].valor  === 11 )  {
          
         //nova compra de cartas do usuário e do computador
          arrayCartasUsuario[0]= comprarCarta();
          arrayCartasUsuario[1] = comprarCarta();
          arrayCartasComputador[0] = comprarCarta();
          arrayCartasComputador[1] = comprarCarta();
          

             
      }
      
       cartaUsuario = "";
       cartaComputador = ""
      //Definição das pontuações do usuário e do computador
      for (let index = 0; index <= 1 ; index++){
           pontuacaoUsuario += arrayCartasUsuario[index].valor;
           pontuacaoComputador += arrayCartasComputador[index].valor;
           cartaUsuario += arrayCartasUsuario[index].texto;
           cartaComputador = arrayCartasComputador[0].texto;
           
          
      }

      confirm("Suas cartas são " + cartaUsuario +  ". A carta revelada do computador é " + cartaComputador +  ". \n" + "Deseja Comprar outra carta?");
       
     
      //mensagem informando as cartas do usuário e sua pontuação e também as cartas do computador e sua pontuação
      console.log("Usuário - cartas : " , arrayCartasUsuario[0].texto , arrayCartasUsuario[1].texto , "Pontuação : " , pontuacaoUsuario);
      console.log("Computador - cartas : " , arrayCartasComputador[0].texto , arrayCartasComputador[1].texto , "Pontuação : " , pontuacaoComputador);
      
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

