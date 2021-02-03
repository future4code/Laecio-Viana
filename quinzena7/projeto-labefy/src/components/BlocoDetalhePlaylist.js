import React from 'react'

class BlocoDetalhePlaylist extends React.Component{
    state ={
        listaMusicas: this.props.lista
    }
   render(){
      const musicasPlaylist = this.state.listaMusicas.map((musica)=>{
          return <div key={musica.id}>
                     <p>Nome da música :{musica.name}</p>
                     <p>Banda/artista:{musica.artist}</p>


                 </div>

      })
       return (
           <div>
               <h4>Músicas</h4>
               {musicasPlaylist}
           </div>
       )
   }
}

export default BlocoDetalhePlaylist