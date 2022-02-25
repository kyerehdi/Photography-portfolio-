import react from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Ural from './components/Ural';
import Buis from './components/Buis';
import Casual from './components/Casual';
import Contact from './components/Contact';

function App() {
  return (
 
    <Router>

   <Routes> 
   
 <Route path="/" element={<Home />} />
  <Route path="/ural" element={<Ural />} />
  <Route path="/business" element={<Buis />} />
  <Route path="/casual" element={<Casual />} />
  <Route path="/contact" element={<Contact />} />
 </Routes>
 </Router>
 
  );
}

export default App;
