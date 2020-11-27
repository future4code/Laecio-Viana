// EXERCICIO 1

/* Faz uma repetição que vai de 0 a 4 , somando esses valores , armazenando em  uma variável
   e mostra o resultado dela .

    10
 */

 //EXERCICIO 2 

  /* 
    a) 18
       19
       21
       23
       25
       27
       30

   b)   Não
  */

  //DESAFIO 1
     
 /*0
  00
  000
  0000 */
   
//EXERCICIO 3

//resposta item a) 
const arrayOriginal = [55,70,23,46,12,97,102,33,48,69, 11, 53,73 , 37];

console.log("// resposta item a");
for (let numero of arrayOriginal){
    console.log(numero);
} 


//resposta item b)
console.log("// resposta item b");
for (let numero of arrayOriginal){
   console.log(numero / 10);
} 

//resposta item c

console.log("//resposta item c");
let novoArray = [];
for (let numero of arrayOriginal){
   if (numero % 2 === 0){
      novoArray.push(numero);
   }
} 

console.log(novoArray);

//resposta item d

console.log("//resposta item d");

let arrayMensagens = [];
let mensagem = "";

for (let i = 0 ; i < arrayOriginal.length; i++) {
    mensagem = "O elemento do índex " + i + "  é " + arrayOriginal[i] ;
    arrayMensagens.push(mensagem);
}

console.log(arrayMensagens);

//resposta item e

console.log("//resposta item e");

let valorMaximo = 0;
let valorMinimo = 9999;

for (let i = 0 ; i < arrayOriginal.length; i++) {
  if (arrayOriginal[i] > valorMaximo){
     valorMaximo = arrayOriginal[i];
  }

  if (arrayOriginal[i] < valorMinimo) {
     valorMinimo = arrayOriginal[i];
  }
}

console.log("O maior número é ", valorMaximo , " e o menor  é ", valorMinimo);


//DESAFIO 2

const numeroPrimeiroJogador = Number(prompt("Digite um número a ser adivinhado"));
console.log(" Vamos Jogar !!!");
let numeroSegundoJogador = Number(prompt("Adivinhe o número escolhido pelo primeiro jogador "));
let quantidadeTentativasAteAcerto = 1;

while (numeroPrimeiroJogador !== numeroSegundoJogador){

   console.log("O número chutado foi :" , numeroSegundoJogador);
   if (numeroPrimeiroJogador > numeroSegundoJogador){
       console.log(" Que pena, você  errou , pois o número escolhido  é maior. ");
       numeroSegundoJogador = Number(prompt("Tente adivinhar novamente. Digite outro número"));
   } else {

      console.log(" Que pena, você  errou , pois o número escolhido  é menor. ");
      numeroSegundoJogador = Number(prompt("Tente adivinhar novamente. Digite outro número"));
   }
    
   quantidadeTentativasAteAcerto += 1;
}
console.log("O número chutado foi :" , numeroSegundoJogador);
console.log("Parabéns, você acertou !!! \n O número de tentativas foi : " , quantidadeTentativasAteAcerto);

