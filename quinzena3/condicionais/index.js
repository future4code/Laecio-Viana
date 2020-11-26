

/* 
               EXERCÍCIO 1
Esse código pega um número digitado pelo usuário  e verifica se ele é par ou ímpar
  verificando se o resto da divisão dele por 2 é igual a  0 ou não ,mostrando uma mensagem 
  que passou no teste caso o número seja par  e uma mensagem que não passou no teste se o
  número é ímpar
*/      

           

    /*  
                EXERCICIO 2
    
     a) Serve para dependendo da fruta digitada pelo usuário , mostrar uma mensagem no console
     informando o nome dessa fruta e seu preço

     b) O preço da fruta Maçã é R$ 2.25

     c) O preço da fruta Pêra é R$ 5
    */


    /*
              EXERCICIO 3
    
     a) Pega um valor digitado pelo usuário , converte no tipo Number e armazena em uma variável

     b) Se o número digitado for 10 vai mostrar um  mensagem  'Esse número passou no teste' 
      Se o número for -10  não aparece nenhuma mensagem.

    c)  Sim .porque a variavel mensagem foi declarada dentro do bloco do if  portanto só é visível dentro desse bloco
       e o comando console para mostrá-lo está fora desse bloco.  */
    

       // EXERCICIO 4

        let idadeUsuario = Number(prompt("Informe a sua idade"));

        if (idadeUsuario >= 18){
          console.log("Você pode dirigir");
        } else {
          console.log("Você não pode dirigir");
        } 



             //          EXERCICIO 5

           const turnoEstudo = prompt("Digite M para matutino , V para vespertino ou N para noturno").toUpperCase();

           if (turnoEstudo === "M") {
               console.log("Bom Dia !");
           } else if (turnoEstudo === "V") {
               console.log("Boa Tarde!");
           } else if (turnoEstudo === "N"){
             console.log("Boa Noite!");
           } else {
             console.log("Não existe esse  turno");
           }
 


          //           EXERCICIO 6

        const turnoEstudo = prompt("Digite M para matutino , V para vespertino ou N para noturno").toUpperCase();

        switch (turnoEstudo){
          case "M":
            console.log("Bom Dia!");
            break;
          case "V":
            console.log("Boa Tarde!");
            break;
          case "N" :
            console.log("Boa Noite!");
            break;
          default :
             console.log("Não existe esse turno");
             break;
        } 

    


        //   EXERCICIO 7 E DESAFIO 1

        const generoFilme = prompt("Qual é o gênero do filme?");
        const precoIngresso = prompt("Qual é o valor do ingresso?");

        if (generoFilme === "fantasia" && precoIngresso < 15){
            const snack = prompt("Qual  snack você quer comprar ?");
            console.log("Bom Filme! \n ...com " , snack );
        } else {
          console.log("Escolha outro filme: (");
        } 


        //DESAFIO 2

        const nomeCompleto = prompt("Informe seu nome completo");
        const tipoDeJogo = prompt("Qual tipo de jogo vai assistir IN ou DO?");
        let etapaDoJogo = prompt("Qual é a etapa do jogo SF , DT ou FI ?");
        const categoria = Number(prompt("Escolha uma categoria 1 , 2 ,3 ou 4 "));
        const quantidadeIngressos = Number(prompt("Informe a quantidade de ingressos  que deseja comprar"));
        let precoIngresso ;
        let totalPagar = 0;

        switch (categoria){
            case 1 :
                if(etapaDoJogo === "DT"){
                  precoIngresso = 660
                  etapaDoJogo = "Decisão Terceiro Lugar"
                } else if (etapaDoJogo === "SF") {
                  precoIngresso = 1320;
                  etapaDoJogo = "Semifinal"
                } else if (etapaDoJogo === "FI"){
                  precoIngresso = 1980;
                  etapaDoJogo = "Final"
                } else {
                  precoIngresso = undefined;
                }

                break;
            case 2 :
                if(etapaDoJogo === "DT"){
                  precoIngresso = 440
                  etapaDoJogo = "Decisão Terceiro Lugar"
                } else if (etapaDoJogo === "SF") {
                  precoIngresso = 880;
                  etapaDoJogo = "Semifinal"
                } else if (etapaDoJogo === "FI"){
                  precoIngresso = 1320;
                  etapaDoJogo = "Final"
                } else {
                  precoIngresso = undefined;
                }

                break;
            case 3 : 
                if(etapaDoJogo === "DT"){
                  precoIngresso = 330
                } else if (etapaDoJogo === "SF") {
                  precoIngresso = 550;
                } else if (etapaDoJogo === "FI"){
                  precoIngresso = 880;
                } else {
                  precoIngresso = undefined;
                }

                break;
            case 4 : 
                if(etapaDoJogo === "DT"){
                  precoIngresso = 170
                  etapaDoJogo = "Decisão Terceiro Lugar"
                } else if (etapaDoJogo === "SF") {
                  precoIngresso = 220;
                  etapaDoJogo = "Semifinal"
                } else if (etapaDoJogo === "FI"){
                  precoIngresso = 330;
                  etapaDoJogo = "Final"
                } else {
                  precoIngresso = undefined;
                }

                break;
            default :
               console.log("Opção inexistente");
               break;
        }

        
        
        

        if (tipoDeJogo === "DO") {
           totalPagar = quantidadeIngressos * precoIngresso;
           console.log("---------DADOS DA COMPRA----------");
           console.log("Nome do cliente : " , nomeCompleto);
           console.log("Tipo do jogo : Nacional ");
           console.log("Etapa do jogo : " , etapaDoJogo);
           console.log("Categoria : ", categoria);
           console.log("Quantidade de ingressos : " , quantidadeIngressos , " ingressos");
           console.log("--------Valores-------------");
           console.log("valor do ingresso :" , " R$ " , precoIngresso);
           console.log("Valor total " , " R$ " , totalPagar);

        } else if (tipoDeJogo === "IN"){
           
           totalPagar = quantidadeIngressos * (precoIngresso / 4.10);
           console.log("---------DADOS DA COMPRA----------");
           console.log("Nome do cliente : " , nomeCompleto);
           console.log("Tipo do jogo : Internacional ");
           console.log("Etapa do jogo : " , etapaDoJogo);
           console.log("Categoria : ", categoria);
           console.log("Quantidade de ingressos : " , quantidadeIngressos , " ingressos");
           console.log("--------Valores-------------");
           console.log("valor do ingresso :" , " U$ " , precoIngresso / 4.10 );
           console.log("Valor total " , " U$ " , totalPagar);

        }
         

         

