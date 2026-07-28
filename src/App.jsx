import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Mainsection from './components/Mainsection';
import Contacts from './components/Contacts';
import Joblist from './components/Joblist';
import Jobsearch from './components/Jobsearch';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Mainsection />} />
        <Route path="/job_listing" element={<Joblist />} />
        <Route path="/job_search" element={<Jobsearch />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact_us" element={<Contacts />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;