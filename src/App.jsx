import './App.css';
import { Route, Routes } from "react-router-dom";
import Landing from './components/Landing';
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
