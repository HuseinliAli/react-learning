import { useState } from "react";
import "./App.css";
import Posts from "./Fetching/Posts";
import Nav from "./ReactRouter/Nav";
import FormControl from "./Formik/FormControl";
import SelectLanguage from "./languages-test/SelectLanguage";
import Home from "./ReactRouter/Home";
import FramerMotion from "./FramerMotion/FramerMotion";
import { motion } from "framer-motion";
import "./assets/index.scss";
import FormValidation from "./Formik/FormValidation";
function App() {
  // const [visible, setVisible] = useState(true);

  return (
    <FormValidation />
    // <motion.div className="App">
    //   <FramerMotion />
    //   <Home />
    //   {/* <Nav />
    //   <Home /> */}

    //   {/* <FormControl/> */}
    //   {/* <Nav /> */}
    //   {/* <Posts /> */}
    //   {/* {visible && <ComponentUnmount />}
    //   <button
    //     onClick={() => {
    //       setVisible(false);
    //     }}
    //   >
    //     hide counter
    //   </button>
    //   <button
    //     onClick={() => {
    //       setVisible(true);
    //     }}
    //   >
    //     show counter
    //   </button> */}
    // </motion.div>
  );
}

export default App;
