const tarefa = document.getElementById("tarefa")
const diaSemanaEscolhido = document.getElementById("dias-semana")
let quantidadeTarefas = 0


const adicionarTarefa = () => {
   
   const diaRealizacaoTarefa = document.getElementById(diaSemanaEscolhido.value)
  
   

   if (tarefa.value !== "" ) {

      diaRealizacaoTarefa.innerHTML += `<p onclick ="riscarTarefa(this)" >${tarefa.value}</p>`
      quantidadeTarefas += 1
     
   
      document.getElementById("tarefa").value = ""

   }  else {
         alert("Informe uma tarefa a ser realizada")
   
      }
  
   
   
}

function riscarTarefa(obj){
   obj.innerHTML = `<p class="texto-riscado">${obj.innerHTML}</p>`
}

function limparTarefas(){

   const tarefasCriadas = document.getElementsByTagName("p")

   
   for (let index = 0 ; index < quantidadeTarefas; index++){
       tarefasCriadas[index].innerHTML = ""
   }

   


   
}


