import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search'
import Home from './Components/Home/Home';
import Hero from './Components/Hero/Hero';
import  Profile  from './Components/portfolio/portfolio';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Newslater from './Components/Newslater';
import Designer from  './Components/Designer/Designer';
import Footer from './Components/Footer/Footer';
import Store from './Components/Store/Store'; 
import Feedback from './Components/Feedback/Feedback';
import ProductList from './Components/ProductList/ProductList';
import Wishlist from './Components/WishList/WishList';
import Furniture from './Components/ProductList/Furniture';
import Lighting from './Components/ProductList/Lighting';
import Decoration from './Components/ProductList/Decoration';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <BrowserRouter>
      <Store>
        <Navbar />
        <Hero />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Designer' element={< Designer />} />
          <Route path='/portfolio/:id' element={<Profile/>} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Feedback' element={<Feedback />} />
          <Route path='/Search/:term' element  = {<Search/>} />
          <Route path='/ProductList' element={<ProductList />}>
            <Route path='Furniture' element={<Furniture />} />
            <Route path='Lighting' element={<Lighting />} />
            <Route path='Decoration' element={<Decoration />} />
          </Route>
          <Route path='/WishList' element={<Wishlist />} />
        </Routes>
        <Newslater />
        <Footer />
      </Store>
    </BrowserRouter>
  );
};

export default App;
