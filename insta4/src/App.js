import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

class App extends React.Component {
  render() {
    const posts = [
      {
          nomeUsuario:'paulinha',
          fotoUsuario :'https://picsum.photos/50/50',
          fotoPost:'https://picsum.photos/200/150'
      },
      
      {
          nomeUsuario:'Carlos',
          fotoUsuario: 'https://picsum.photos/id/1023/367/267',
          fotoPost:'https://picsum.photos/id/1022/367/267'

      },

      {
          nomeUsuario:'Maria',
          fotoUsuario:'https://picsum.photos/id/1025/367/267',
          fotoPost:'https://picsum.photos/id/1021/367/267'
      }
    ]

    const listaPosts = posts.map((post)=>{
         return ( <Post nomeUsuario = {post.nomeUsuario} fotoUsuario={post.fotoUsuario} fotoPost={post.fotoPost}>
                   
                 </Post>

         )
    })

    return (

      <div className={'app-container'}>
          {listaPosts}
        
      </div>
    );
  }
}

export default App;
