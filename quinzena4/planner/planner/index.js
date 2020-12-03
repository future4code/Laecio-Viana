const adicionarTarefa = () => {
   const tarefa = document.getElementById("tarefa").value
   
   const diaSemanaEscolhido = document.getElementById("dias-semana").value
  
   
   const diaRealizacaoTarefa = document.getElementById(diaSemanaEscolhido)
   diaRealizacaoTarefa.innerHTML += `<p>${tarefa}</p>`

   document.getElementById("tarefa").value = ""
   
}
