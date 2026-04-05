import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Atividade DevOps 🚀</h1>
      <p>Ambiente: DEV / TEST / PROD</p>
      <p>Ambiente dev</p>
      <p>Ambiente pra teste</p>
      <button onClick={() => alert("Funcionando!")}>
        Clique aqui
      </button>
    </div>
  );
} 

export default App;