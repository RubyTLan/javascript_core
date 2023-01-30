
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import All from "./components/All";
import One from "./components/One";
import Create from "./components/Create";
import Update from "./components/Update";
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<><Create/><All/></>}/>


        <Route path="/one/:id" element={<One/>}/>
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>

    </div>
  );
}

export default App;
