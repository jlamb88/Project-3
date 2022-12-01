//DEPENDENCIES
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//PAGES
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import SignUp from './pages/SignUp';
import LoginForm from './components/LoginForm'


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
import About from './pages/About';

// details
function App() {


  return (
		<div className='bg-parent'>
    <CartProvider>
      <Container>
        <NavComponent></NavComponent>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
						<Route path='/store' element={<Store />} />
            <Route path='success' element={<Success />} />
            <Route path='cancel' element={<Cancel />} />
						<Route path='store' element={<Store />} />
            <Route path='/user' element={<UserPage />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/signup' element={<SignUp />} />
          <Route path='about' element={<About />} />
					</Routes>

        </BrowserRouter>
      </Container>
    </CartProvider>
		</div>
  );
};

export default App;
