import React from 'react'

export function Etapa1() {
    return (
      <div className="Etapa1">
           <h1>ETAPA 1 - DADOS GERAIS</h1>
           <p>1.Qual o seu nome ?</p>
           <input></input>
           <p>2.Qual a sua idade ?</p>
           <input></input>
           <p>3.Qual o seu email ?</p>
           <input></input>
           <p>4.Qual é sua escolaridade ?</p>
           <select>
               <option>Ensino Médio incompleto</option>
               <option>Ensino Médio completo</option>
               <option>Ensino Superior incompleto</option>
               <option>Ensino Superior completo</option>
               
           </select>
      </div>
    );
  }
  
  export default Etapa1;
  