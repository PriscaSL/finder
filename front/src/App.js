import './App.css';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Whyus from './pages/Whyus'; 
import Services from './pages/Services'; 
import Homeuser from './pages/Homeuser';
import Beginner from './pages/Beginner';
import Module from './pages/Module';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ModuleItem from './pages/ModuleItem';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/why-us" element={<Whyus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/homeuser" element={<Homeuser />} />
          <Route path="/beginner" element={<Beginner />} />
          <Route path="/module" element={<Module />} />
          <Route path="/module-item" element={<ModuleItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
