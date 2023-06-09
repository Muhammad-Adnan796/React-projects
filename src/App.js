import logo from "./logo.svg";
import "./App.css";
import { React_form_Validation } from "./Components_Forms/React_form_Validation";
import { Formik_Form } from "./Components_Forms/Formik_Form";
import { Formik_Form_2 } from "./Components_Forms/Formik_Form_2";

function App() {

  return (
    <div className="App">
      <React_form_Validation/> 
      <Formik_Form />
     
      <Formik_Form_2/>
    </div>
  );
}

export default App;
