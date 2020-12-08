let tituloDigitado = document.getElementById("titulo-post")
let autorDigitado = document.getElementById("autor-post")
let textoDigitado = document.getElementById("conteudo-post")
let imagemEscolhida = document.getElementById("imagem-post")

const arrayPosts = []

const posts = document.getElementById("container-de-posts")

function criarPost() {
   const post = {
       titulo : tituloDigitado.value,
       autor : autorDigitado.value,
       conteudo : textoDigitado.value,
       imagem: imagemEscolhida.value
   }

   adicionarPostNoArray(post)
   console.log(arrayPosts)
   limparCamposFormulario()
   mostrarPosts()  


   
     
}

function adicionarPostNoArray (post){
     arrayPosts.push(post)   
}

function limparCamposFormulario () {
    tituloDigitado.value = ""
    autorDigitado.value = ""
    textoDigitado.value = ""
    imagemEscolhida.value = ""
}

function mostrarPosts(){
    
    posts.innerHTML = ""

    for (let post of arrayPosts){
        posts.innerHTML +=`<p> Título : ${post.titulo}, Autor : ${post.autor}, Conteúdo : ${post.conteudo} 
        </p>`
        posts.innerHTML += `<img src = "${post.imagem}">`
    }
}



   