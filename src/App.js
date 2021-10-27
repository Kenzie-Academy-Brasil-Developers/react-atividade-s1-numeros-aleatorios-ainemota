import { useState } from "react";
import "./App.css";

function App() {
  const [number, setnumber] = useState(Math.floor(Math.random() * 100) + 1);

  const randomNumber = () => {
    return setnumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className="App">
      <span>Número: {number}</span>
      <button className="btn" onClick={randomNumber}>
        Gerar Número
      </button>
    </div>
  );
}

export default App;
