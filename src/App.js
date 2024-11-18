
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MoiveDetails from './pages/MoiveDetails';

function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/movie/:id' element={<MoiveDetails/>}/>
    </Routes>
   </Router>
  );
}

export default App;
