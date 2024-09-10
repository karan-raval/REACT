import { useContext } from "react";
import "./App.css";
import { Mycontext } from "./Components/Contaxtapi.jsx";

function App() {
  const data = useContext(Mycontext);
  console.log(data);

  return (
    <>
      <h1>{data.state.count1}</h1>
      <button onClick={() => data.dispatch({ type: "INC" })}>+</button>
      <button
        disabled={data.state.count1 == 0}
        onClick={() => data.dispatch({ type: "DEC" })}
      >
        -
      </button>
    </>
  );
}

export default App;
