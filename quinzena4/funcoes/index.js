//EXERCICIO 1

//a) vai imprimir o número 10 e o número 50

//b) Não apareceria nenhuma mensagem no console


//EXERCICIO 2

//a) Darvas e Goli

//b) Amanda  e Caio

//EXERCICIO 3

// A função recebe um array como parametro, cria um novo array  , percorre o array passado como argumento verificando
// se o elemento é par  e adicionando no novo array o produto dele por ele mesmo  e dá como retorno esse novo array.
// novo nome retornaArrayComElementosPares


//EXERCICIO 4

//a) 
   function mostrarMensagemSobreMim(){
       console.log("Eu sou Laécio, tenho 27 anos , moro em Altos- Piauí e sou estudante")
   }

   mostrarMensagemSobreMim()
 

 //b)
      const mostrarInformacoesSobreMim = (nome, idade , cidade, souEstudante) =>{
          if (souEstudante){
            console.log("Eu sou " + nome + " , tenho " + idade + " anos , moro em " + cidade + " e sou estudante " )
          } else {
            console.log("Eu sou " + nome + " , tenho " + idade + " anos , moro em " + cidade + " e  não sou estudante " )
          }
      }

      mostrarInformacoesSobreMim("Jorge", 10, "Fortaleza-CE", false)


      //EXERCICIO 5

//a)
     function  retornaSomaDeDoisNumeros(numero1, numero2){
          const soma = numero1 + numero2
          return soma
     }

     console.log(retornaSomaDeDoisNumeros(7,8))
     
//b) 
    function verificaSePrimeiroNumeroEMaiorOuIgualAoSegundoNumero(valor1, valor2){
          return valor1 >= valor2
    }

    console.log(verificaSePrimeiroNumeroEMaiorOuIgualAoSegundoNumero(6,9))
   
//c) 

   const imprimirMensagemDezVezes = (mensagem) => {
       for  (let i = 0 ; i <= 9 ; i++) {
           console.log( mensagem) 
       }
   }


   imprimirMensagemDezVezes("Bom dia !")


        //EXERCICIO 6
 
  //a)
      const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

      function retornaQuantidadeElementosArray (array){
           return array.length
      }

      console.log(retornaQuantidadeElementosArray(array), "elementos")


//b)
     
    function verificaSeNumeroEParOuNao (numero) {

        let ePar 

        if (numero % 2 === 0){
            ePar = true
        } else {
            ePar = false
        }

        return ePar

    }

    console.log(verificaSeNumeroEParOuNao(10))

  //c)

  function calculaQuantidadeNumerosParesDoArray (array){
       let quantidadeNumerosPares = 0

       for (const item of array){
           if (item % 2 === 0) {
              quantidadeNumerosPares++
           }
       }

       return quantidadeNumerosPares
  }

  console.log(calculaQuantidadeNumerosParesDoArray(array), "Números pares")

  //d)
       function calculaQuantidadeNumerosParesDoArray (array){
                let quantidadeNumerosPares = 0

                for (const item of array){
                    if (verificaSeNumeroEParOuNao(item)) {
                       quantidadeNumerosPares++
                    }
                }

                return quantidadeNumerosPares
            }
       console.log(calculaQuantidadeNumerosParesDoArray(array), "Números pares")


      // DESAFIO 1

    let mostrarMensagemConsole = (valor) => {
        console.log(valor)
    }

    let chamarFuncaoMostrarMensagemConsole = (numero1, numero2) => {
        let soma = numero1 + numero2
        mostrarMensagemConsole(soma)
    }

    chamarFuncaoMostrarMensagemConsole(1,2)


    //DESAFIO 2

    const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

    //a)
        function retornaArrayComElementosParesMultiplicadosPor2(array){
             let novoArray = []

             for (const elemento of numeros) {
                if (elemento % 2 === 0){
                   novoArray.push(elemento * 2)
                }
             }

             return novoArray
        }

        console.log(retornaArrayComElementosParesMultiplicadosPor2(array))

//b)

      function retornaMaiorNumeroArray (numeros) {
          let maiorNumero = 0

          for (const numero of numeros) {
              if (numero > maiorNumero) {
                  maiorNumero = numero
              }
          }

          return maiorNumero
      }

      console.log("Maior número do array " , retornaMaiorNumeroArray(numeros))

// c)  

    function retornaIndiceDoMaiorNumeroArray (array) {

        let maiorNumeroArray = 0
        let indiceMaiorNumeroArray

        for (let i = 0 ; i < array.length ; i++){
            if (array[i] > maiorNumeroArray) {
                maiorNumeroArray = array[i]
                indiceMaiorNumeroArray = i
            }
        }

           

        return indiceMaiorNumeroArray
         
    }

    console.log("O maior elemento do array está na posição " , retornaIndiceDoMaiorNumeroArray(numeros))