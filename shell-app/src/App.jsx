import "./App.css";
import MicroApp from "appOne/MicroApp";
import { useCount } from "appOne/Store";

function App() {
  const [count, setCount] = useCount();

  return (
    <>
      <div className="shell">
        <h1>🤟Shell App🤟</h1>
        <div className="border">
          <MicroApp />
        </div>
        <div className="mt-2">
          <button onClick={() => setCount(count + 1)}>
            Shell App button {count}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
