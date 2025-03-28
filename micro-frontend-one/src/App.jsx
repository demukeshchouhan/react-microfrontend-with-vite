import "./App.css";
import { useCount } from "./store";

function App() {
  const [count, setCount] = useCount();
  return (
    <div className="micro-app">
      <h1>Micro Front end App</h1>
      <p>Welcome to the micro frontend! this is updated</p>
      <button onClick={() => setCount(count + 1)}>
        App One Button {count}
      </button>
    </div>
  );
}

export default App;
