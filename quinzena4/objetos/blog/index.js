let tituloDigitado = document.getElementById("titulo-post")
let autorDigitado = document.getElementById("autor-post")
let textoDigitado = document.getElementById("conteudo-post")

const arrayPosts = []

function criarPost() {
   const post = {
       titulo : tituloDigitado.value,
       autor : autorDigitado.value,
       conteudo : textoDigitado.value
   }

   adicionarPostNoArray(post)
   console.log(arrayPosts)
   limparCamposFormulario()

   
     
}

function adicionarPostNoArray (post){
     arrayPosts.push(post)   
}

function limparCamposFormulario () {
    tituloDigitado.value = ""
    autorDigitado.value = ""
    textoDigitado.value = ""
}


   