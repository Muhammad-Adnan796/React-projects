import logo from "./logo.svg";
import "./App.css";
import { Reducer } from "./Components/Reducer";
import { Fetch_Api } from "./Components/Fetch_Api";
import { Axios_get } from "./Components/Axios_get";
import { Axios_post } from "./Components/Axios_post";

function App() {
  return (
    <div className="App">
      {/* <Reducer />
      <Fetch_Api /> 
      <Axios_get />
      */}
      <Axios_post/>
    </div>
  );
}

export default App;
