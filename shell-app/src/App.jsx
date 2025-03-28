import "./App.css";
import MicroApp from "appOne/MicroApp";
import { useCount } from "appOne/Store";

function App() {
  const count = useCount();

  return (
    <>
      <div className="shell">
        <h1>🤟Shell App🤟</h1>
        <MicroApp />
        <div className="mt-2">
          <button>Shell App button {count}</button>
        </div>
      </div>
    </>
  );
}

export default App;
