import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import minhaFoto from './imagens/minhafoto.jpg';
import {CardPequeno} from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={minhaFoto}
          nome="Laécio da Conceição Viana" 
          descricao="Oi, eu sou o Laécio. Sou estudante do curso noturno da Labenu de frontend com React. 
          Adoro programar , jogar futebol , assistir animes , ouvir músicas e jogar vídeogame. 
          Estudei o curso de técnico de informática no IFPI , estagiei como suporte técnico no TRE-PI e trabalhei como recepcionista."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className= "page-section-container">
           <CardPequeno imagem="https://maisaromas.com.br/wp-content/uploads/2017/04/Icone-email.png" dados={"Email"} informacao={"vitor@gmail.com"}/>
           <CardPequeno imagem ="https://freepikpsd.com/wp-content/uploads/2019/10/endere%C3%A7o-icon-png-6.png" dados={"Endereço"} informacao={"Rua Ouro Preto N º 1345"}/>
          
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
