/* resposta1 exercicio interpretacao 

a. false
b. false
c. true
e. boolean */

/* resposta2 exercicio interpretacao

a. undefined
b. null
c.  11
d.  3
e.  [3,19,5, 6, 7, 8, 9, 10,11,12,13]
f. 9

 */

 
// questão 1
 let idadeUsuario = Number(prompt("Digite a sua idade"));
 let idadeAmigo = Number(prompt("Digite a idade de seu melhor amigo ou amiga"));
 console.log("Sua idade é maior do que a do seu amigo?", idadeUsuario > idadeAmigo);
 console.log("Diferença entre as idades ", idadeUsuario - idadeAmigo);
  

 
 //  questão 2
  let numeroPar = Number(prompt("Digite um número par"));
  let restoDivisaoPor2 = numeroPar % 2;
  console.log("O resto da divisão do número digitado por 2 é ", restoDivisaoPor2);

//O padrão notado é que o resto da divisão dos números pares por 2  é sempre zero
//caso o número digitado pelo usuário for ímpar , o resto da divisão desse número por 2 é sempre 1 */


// questão 3
let listaDeTarefas = []

const primeiraTarefa = prompt("Digite  a principal tarefa que você faz no dia-a-dia");
listaDeTarefas.push(primeiraTarefa);
const segundaTarefa = prompt("Digite uma outra tarefa que faz no dia a dia");
listaDeTarefas.push(segundaTarefa);
const ultimaTarefa = prompt("Digite a última tarefa que você deve fazer no dia");
listaDeTarefas.push(ultimaTarefa);
console.log(listaDeTarefas);

let indice = Number(prompt("Digite  o índice de uma de suas tarefas realizadas 0,1 ou 2 para ser removida da lista"));
listaDeTarefas.splice(indice,1);
console.log(listaDeTarefas); 


//questão4
const nomeUsuario = prompt("Informe seu nome ");
const emailUsuario = prompt("Informe seu email");
console.log("O e-mail " + emailUsuario + " foi cadastrado com sucesso!. Seja Bem-vindo(a) " + nomeUsuario);



 //desafio questão 1
 //a
 let Graus_Fahrenheit = 77;
 let Kelvin = (Graus_Fahrenheit - 32) * 5/9 + 273.15;
 console.log("A temperatura em Kelvin é de " + Kelvin + " K");

 //b
 let Graus_Celsius = 80;
 Graus_Fahrenheit = Graus_Celsius * 9 /5 + 32;
 console.log("A temperatura em Fahrenheit é de " + Graus_Fahrenheit + " ºF");

 //C e D
 Graus_Celsius = Number(prompt("Informe uma temperatura em Graus Celsius que deseja converter"));
 Graus_Fahrenheit = Graus_Celsius * 9 /5 + 32;
 Kelvin = (Graus_Fahrenheit - 32) * 5/9 + 273.15;
 console.log("A temperatura em Fahrenheit é de " + Graus_Fahrenheit + " ºF");
 console.log("A temperatura em Kelvin é de " + Kelvin + " K");


 //desafio questão 2

 //a

 let consumoQuilowatts = 280;
 let valorPago = consumoQuilowatts * 0.05;
 
 console.log("R$ " , valorPago);

 //b
 let porcentagemDesconto = 0.15;
 let totalDesconto = valorPago * porcentagemDesconto;
 valorPago -= totalDesconto;
 console.log("O valor a ser pago agora é de ", valorPago);