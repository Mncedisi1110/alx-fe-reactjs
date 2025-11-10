import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';

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