

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

    


        //   EXERCICIO 7

        const generoFilme = prompt("Qual é o gênero do filme?");
        const precoIngresso = prompt("Qual é o valor do ingresso?");

        if (generoFilme === "fantasia" && precoIngresso < 15){
            console.log("Bom Filme!");
        } else {
          console.log("Escolha outro filme: (");
        }
        