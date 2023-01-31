
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import All from "./components/All";
// import One from "./components/One";
import Create from "./components/Create";
import Update from "./components/Update";
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<All/>}/>
          <Route path="/new" element={<Create/>}/>
          {/* <Route path="/one/:id" element={<One/>}/> */}
          <Route path="/edit/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
