function resolverExerciciosInterpretacaoCodigo () {
    //exercicio 1


    /* A função vai converter  o valor do dinheiro de dólares  em reais , passando como parâmetro o valor em dólares,
    O usuário informa a cotacão  através de um prompt convertendo esse valor em número e armazenando em uma variável 
    e depois retorna o produto da cotação pelo valor em dólares. Nesse caso o console.log vai mostrar como resultado
    o valor de 100 vezes a cotação digitada pelo usuário.
 */

    //exercicio 2

   /* A função usa como parâmetros o tipo de investimento a ser feito  e o valor desse investimento  e vai retornar o novo
   valor após realização desse investimento.  Dentro da função é criada uma variável que representa o novo valor 
   após investimento , é usada uma estrutura de decisão switch case que dependendo do tipo de investimento 
   o novo valor após investimento vai receber o produto do valor passado por parâmetro por uma determinada taxa.
  
   O primeiro console.log vai mostrar o valor 165 e no segundo console.log vai dar um alert com a mensagem 'tipo de investimento
   informado incorreto'  e mostrar a  mensagem  undefined */



   //exercicio 3

  /*  Possui um array com vários elementos  e dois arrays vazios, usa a estrutura de repetição for ... of para percorrer
   cada elemento do array com os elementos, dentro do laço verifica com o if else se o elemento é par ou ímpar , caso seja
   par , ele adiciona esse elemento no primeiro array vazio  e caso seja ímpar adiciona no segundo array vazio.
   No primeiro console.log vai mostrar a  mensagem 'Quantidade total de números 14'
   No segundo console.log  vai mostrar o número 6
   No terceiro console.log vai mostrar o número 8
 */


 //exercicio 4
    /* Vai percorrer todos os elementos do array  e armazenar em uma variável o maior valor entre eles  e em outra variável 
    o menor valor entre eles.
    cria um array com elementos , uma variável com  valor Infinity para que qualquer valor seja menor que ele 
    e outra variável com valor 0 para que qualquer valor seja maior que ele .

    vai percorrer o array com o for ...of verificando se o  elemento do array é menor que a primeira variável 
     e caso seja  essa variável vai receber o valor desse elemento  e também verifica se o elemento do array é maior
     que a segunda variável  e se for  essa variável vai receber o valor desse elemento.

     primeiro console.log vai mostrar o número -10  e o segundo console.log vai mostrar o número 1590 */

}

function resolverExercicio1LogicaProgramacao () {
   //utilizando o for , o for ...of  ou while
   const anos = [1990, 1994, 2002, 2010]
   let index = 0
   while (index < anos.length){
       console.log(anos[index])
       index++
   }

   for (let indice = 0 ; indice < anos.length; indice++) {
       console.log(anos[indice])
   }

   for (ano of anos) {
       console.log(ano)
   }
}

//resolverExercicio1LogicaProgramacao()

function resolverExercicio2LogicaProgramacao (){
   //a)  False
   //b) False
   //c) True
   //d) True
   //e) True
       
}

function resolverExercicio3LogicaProgramacao () {
    //Não funciona porque não está incrementando a variável i dentro do bloco do while  e também
    //a variável de quantidade de números pares está sem valor , portanto fica como undefined e a condicional
    //do while tem que ir até menor que a variável  de quantidade de números pares
    const quantidadeDeNumerosPares = 3
    let i = 0
    while(i < quantidadeDeNumerosPares) {
          console.log(i*2)
          i++
    }
}

//resolverExercicio3LogicaProgramacao()

function resolverExercicio4LogicaProgramacao (a,b, c){
    if (a === b && b === c){
        return "Triângulo Equilátero"
    } else if (a !== b && b !== c && c !== a){
        return "Triângulo Escaleno"
    } else {
        return "Triângulo Isósceles"
    }
}

/*  const tipoTriangulo = resolverExercicio4LogicaProgramacao(8,8,8)
console.log(tipoTriangulo)  */


function resolverExercicio5LogicaProgramacao (numero1, numero2) {
       let maior
       let menor
       if (numero1 > numero2){
           maior = numero1
           menor = numero2
       } else if (numero2 > numero1){
           maior = numero2
           menor = numero1
       }
       console.log("O maior número é ", maior)
   

       if (numero1 % numero2 === 0){
          console.log(`${numero1} é divisível por ${numero2}`)
       } else {
          console.log(`${numero1}  não é divisível por ${numero2}`)
       }

       if (numero2 % numero1 === 0){
            console.log(`${numero2} é divisível por ${numero1}`)
       } else {
            console.log(`${numero2}  não é divisível por ${numero1}`)
       }



     
       console.log(`A diferença entre os números é de ${maior - menor}`)

}

//resolverExercicio5LogicaProgramacao(10,50)

 /* function resolverExercicio1Funcoes (valores){
        


}

const numeros = [8,14,56,43,2,11,7,44,36]
//resolverExercicio1Funcoes(numeros)  */

let resolverExercicio2Funcoes = function (){
    alert("Hello Future4")
}

//resolverExercicio2Funcoes()