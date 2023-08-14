import './App.css';
import { Routes, Route } from 'react-router-dom';
import HeaderForm from './component/HeaderForm';
import People from './views/People';
import Planets from './views/Planets';


function App() {
  return (
    <div className='App'>
    <h1>LukeWalkerAPI:</h1>
    <HeaderForm />

    <Routes>
      <Route path="/people/:id" element={<People />} />
      <Route path="/planet/:id" element={<Planets />} />
    </Routes>

    </div>
  );
}

export default App;
