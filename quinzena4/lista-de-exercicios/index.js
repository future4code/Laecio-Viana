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

function resolverExercicio1Objetos (){
    //O array é uma estrutura que permite guardar vários valores de forma ordenada, utilizamos quando
    // precisamos guardar mais de um valor em uma variável para não perder esses dados

    // O objeto é uma estrutura que representa algo próximo da realidade, utilizamos quando queremos evitar
    //a criação de muitas variáveis  através de suas chaves e valores.
}

const criaRetangulo = (lado1, lado2) => {
    
    const perimetro = 2 * (lado1 + lado2)
    const area = lado1 * lado2

    const retangulo = {
        largura: lado1,
        altura : lado2,
        perimetro : perimetro,
        area: area

    }

    return retangulo
}

//console.log(criaRetangulo(4, 3))


function resolverExercicio3Objetos (){
    const filmeFavorito = {
        título: "Pantera Negra",
        anoLancamento: 2018,
        diretor:" Ryan Coogler",
        elenco: ["Chadwick Boseman", "Michael B. Jordan", "Letitia Wright","Lupita Nyong'o"]

    }

    console.log(`Venha assistir ao filme ${filmeFavorito.título}, de ${filmeFavorito.anoLancamento}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.elenco}`)
}

//resolverExercicio3Objetos()

const pessoa = {
    nome: "Laécio",
    idade : 27,
    email: "laecio@gmail.com",
    endereco: "rua Ouro Preto Nº 1345"
}

function anonimizarPessoa (){
    const pessoaAnonima = {
        ...pessoa,
        nome: "Anônimo"
    }

    return pessoaAnonima
}

/* console.log(anonimizarPessoa())
console.log(pessoa) */


const individuos = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

const pessoasAdultas  = individuos.filter((individuo)=>{
    return individuo.idade >= 20
})

const pessoasJovens = individuos.filter((individuo)=>{
     return individuo.idade  < 20
})

/* console.log(pessoasAdultas)
console.log(pessoasJovens) */

const array = [1, 2, 3, 4, 5, 6]
const multiplicaElementoArrayPor2 = array.map((valor)=>{
    return valor * 2
})

//console.log(multiplicaElementoArrayPor2)

const multiplicaElementoArrayPor3EmString = array.map((elemento)=>{
     
     return `${elemento * 3}`
})

//console.log(multiplicaElementoArrayPor3EmString)

const mostraElementoArraySeEImparOuPar = array.map((numero)=>{
     if (numero % 2 === 0){
        return `${numero}  é par`
     } else {
         return `${numero} é ímpar`
     }
})

//console.log(mostraElementoArraySeEImparOuPar)

const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const pessoasEntradaPermitida = pessoas.filter((pessoa)=>{
     return pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60
})

const pessoasEntradaProibida = pessoas.filter((pessoa)=>{
     return pessoa.altura < 1.5 || pessoa.idade <= 14  || pessoa.idade >= 60
})

/* console.log(pessoasEntradaPermitida)
console.log(pessoasEntradaProibida) */


const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const mensagens = []
let mensagem
consultas.forEach((consulta)=>{
    if (consulta.cancelada === false){
            if (consulta.genero === "feminino"){
                    mensagem = `Olá Sra. ${consulta.nome}. Estamos enviando essa mensagem para lembrá-la da sua consulta no dia 
                    ${consulta.dataDaConsulta}. Por favor acuse o recebimento desse email. `
                    mensagens.push(mensagem)
            } else {
                    mensagem = `Olá Sr. ${consulta.nome}. Estamos enviando essa mensagem para lembrá-lo da sua consulta no dia 
                    ${consulta.dataDaConsulta}. Por favor acuse o recebimento desse email. `
                    mensagens.push(mensagem)
            }

    } else{

            if (consulta.genero === "feminino"){
                    mensagem = `Olá Sra. ${consulta.nome}. Infelizmente, sua consulta marcada para o dia 
                    ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la. `
                    mensagens.push(mensagem)
            } else {
                    mensagem = `Olá Sr. ${consulta.nome}.Infelizmente, sua consulta marcada para o dia 
                    ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la. `
                    mensagens.push(mensagem)
            }


    }
})

//console.log(mensagens)

const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]


 function atualizaSaldoBancarioClientes () {

     let totalCompras 
     contas.forEach((conta)=>{
         totalCompras = 0
         for (let compra of conta.compras){
             totalCompras += compra
         }
     
         conta.saldoTotal -= totalCompras
     })

     return contas
 }


 console.log(atualizaSaldoBancarioClientes())