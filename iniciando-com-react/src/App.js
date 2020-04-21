import React from 'react';

function App(props) {

  const changeName = e => {
    console.log(e.target.value)
  }

  const criarComboBox = () => {
    const opcoes = [ "Fulano", "Cicrano" ]
    let comboBoxOpcoes = opcoes.map(opcao => <option key={opcao}>{opcao}</option>)

    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }
    const MeuComboBox = () => criarComboBox()

    return (
      <>
        <input className="text" type="text" value={props.nome} onChange={changeName}/>
        <h1>Hello {props.nome} sua idade é {props.idade}</h1>
        <MeuComboBox />
      </>
    )
}

export default App;
