const adicionarTarefa = () => {
   const tarefa = document.getElementById("tarefa").value
   
   const diaSemanaEscolhido = document.getElementById("dias-semana").value

   if (tarefa !== "" ) {

      const diaRealizacaoTarefa = document.getElementById(diaSemanaEscolhido)
      diaRealizacaoTarefa.innerHTML += `<p>${tarefa}</p>`
   
      document.getElementById("tarefa").value = ""
   }  else {
         alert("Informe uma tarefa a ser realizada")
   }
  
   
   
}
