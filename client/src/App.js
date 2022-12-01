//DEPENDENCIES
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//PAGES
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import About from './pages/About';
// import SignUp from './pages/SignUp';


//CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

//COMPONENTS
import Store from './pages/Store';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import CartProvider from './CartContext';
import NavComponent from './components/Navbar/Navbar';



function App(details) {

  return (
		<div className='bg-parent'>
    <CartProvider>
      <Container>
        <NavComponent></NavComponent>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
						<Route exact path='/store' element={<Store />} />
            <Route exact path='/success' element={<Success />} />
            <Route exact path='/cancel' element={<Cancel />} />
						<Route exaact path='/store' element={<Store />} />
            <Route exact path='/user' element={<UserPage />} />
            {/* <Route path='/signup' element={<SignUp />} /> */}
          	<Route exact path='/about' element={<About />} />
					</Routes>

        </BrowserRouter>
      </Container>
    </CartProvider>
		</div>
  );
};

export default App;
