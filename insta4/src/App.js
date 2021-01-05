import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

         <Post
          nomeUsuario={'Carlos'}
          fotoUsuario={'https://picsum.photos/id/1023/367/267'}
          fotoPost={'https://picsum.photos/id/1022/367/267'}
        />

        <Post
          nomeUsuario={'Maria'}
          fotoUsuario={'https://picsum.photos/id/1025/367/267'}
          fotoPost={'https://picsum.photos/id/1021/367/267'}
        />
        
        
        
      </div>
    );
  }
}

export default App;
