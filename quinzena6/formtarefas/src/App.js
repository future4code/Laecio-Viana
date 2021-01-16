import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {id:Date.now(),
         texto:"estudar" ,
         completa: false
        },

        {id:Date.now(),
          texto:"assistir animes" ,
          completa: true
         },

         {id:Date.now(),
          texto:"almoçar" ,
          completa: true
         }
      ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {

  };

  componentDidMount() {

  };

  onChangeInput = (event) => {
       this.setState({inputValue:event.target.value})
  }

  criaTarefa = () => {

    
    // criação de novo objeto tarefa 
    const novaTarefa = {
      id:Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    
    // nova lista de tarefas através da cópia da lista de tarefas do estado acrescendo a nova tarefa criada
    const listaTarefas = [novaTarefa, ...this.state.tarefas]
    console.log(listaTarefas)


    //alteração do estado com a nova lista de tarefas com as modificações
    this.setState({tarefas:listaTarefas,
                inputValue: ""    
         })

    



  }

  selectTarefa = (id) => {

  }

  onChangeFilter = (event) => {

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
