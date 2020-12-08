let tituloDigitado = document.getElementById("titulo-post")
let autorDigitado = document.getElementById("autor-post")
let textoDigitado = document.getElementById("conteudo-post")

function criarPost() {
   const post = {
       titulo : tituloDigitado.value,
       autor : autorDigitado.value,
       conteudo : textoDigitado.value
   }

   
}