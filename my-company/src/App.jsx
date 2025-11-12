import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';

export default
function App() {
  return (
  <BrowserRouter>
    <Navbar />
   <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path='/Services' element={<Services />} />
   </Routes>

  </BrowserRouter>
  )
}