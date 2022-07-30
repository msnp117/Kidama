
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home'
import LetraPage from './pages/LetraPage';
import AbcPage from './pages/AbcPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

     <main className='main text-center'>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/abc' element={<AbcPage/>} />
          <Route path='/abc/:letra' element={<LetraPage/>} />

        </Routes>
     </main>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
