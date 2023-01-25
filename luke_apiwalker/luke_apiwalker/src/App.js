import { Routes, Route } from "react-router-dom";
import './App.css';
import {Form,People,Planets} from "./components/Form";

function App() {
  return (
    <div className="App">
      <h1>Luke API-walker</h1>

        <Routes>
          <Route path="/" element={<Form/>}/>
          <Route path="/people/:id" element={<><Form/><People/></>} />
          <Route path="/planets/:id" element={<><Form/><Planets/></>} />
        </Routes>
    </div>
  );
}

export default App;
