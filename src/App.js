import { useState } from "react";
import "./App.css";
import ComponentUnmount from "./ComponentLifecycle/ComponentUnmount";

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="App">
      {visible && <ComponentUnmount />}
      <button
        onClick={() => {
          setVisible(false);
        }}
      >
        hide counter
      </button>
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        show counter
      </button>
    </div>
  );
}

export default App;
