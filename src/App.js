import { useState } from "react";
import "./App.css";
import Posts from "./Fetching/Posts";
import Nav from "./ReactRouter/Nav";
import FormControl from "./Formik/FormControl";

function App() {
  // const [visible, setVisible] = useState(true);

  return (
    <div className="App">
      <FormControl/>
      {/* <Nav /> */}
      {/* <Posts /> */}
      {/* {visible && <ComponentUnmount />}
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
      </button> */}
    </div>
  );
}

export default App;
