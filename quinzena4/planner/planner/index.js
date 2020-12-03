const tarefa = document.getElementById("tarefa")
const diaSemanaEscolhido = document.getElementById("dias-semana")

const adicionarTarefa = () => {
   

   if (tarefa.value !== "" ) {

      const diaRealizacaoTarefa = document.getElementById(diaSemanaEscolhido.value)
      diaRealizacaoTarefa.innerHTML += `<p onclick ="riscarTarefa(this)" >${tarefa.value}</p>`
   
      document.getElementById("tarefa").value = ""

   }  else {
         alert("Informe uma tarefa a ser realizada")
   
      }
  
   
   
}

function riscarTarefa(obj){
   obj.innerHTML = `<p class="texto-riscado">${obj.innerHTML}</p>`
}
