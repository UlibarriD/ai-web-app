import './App.css';
import { Route, Routes } from "react-router-dom";
import Landing from './components/Landing';
import Form from './components/Form'
//import Result from './components/Result'
import Carrousel from './components/Carrousel'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/form' element={<Form />} />
        <Route path='/result' element={<Carrousel />}/>
      </Routes>
    </div>
  );
}

export default App;
