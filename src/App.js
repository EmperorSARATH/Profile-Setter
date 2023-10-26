import "./App.css";
import { Route, Routes } from "react-router-dom";
import Skills from "./Component/Skills";
import { BrowserRouter } from 'react-router-dom';
import Home from "./Component/Home";

function App() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/skills' element={<Skills/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  );
}
export default App;