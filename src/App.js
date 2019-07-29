import React, { Component } from 'react';
import logo from './logo.svg';
import bra1 from './bra1.png'
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={bra1} /** className="App-download"*/ alt="bra1" align="top" />
          <h2>Aplicação</h2>
        </div>
        
    <br />
    <br />
    <br />

<form>
<span className="formtext">CPF</span>
  <input 
    type="text" 
    placeholder="Digite o CPF" 
    required 
  />
  <button>Enviar</button>
</form>

</div>    
    );
  }

 
  

}

export default App;