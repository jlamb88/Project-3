import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/Navbar/Navbar';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './pages/Store';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import CartProvider from './CartContext';
import UserPage from './pages/UserPage'
import LoginForm from './components/LoginForm'
import React, {useState} from 'react'
import Queries from './components/Queries'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const details = LoginForm.details
  const data = Queries
  const handleLoggedIn = () => {
      if (details.email === data.user.email && details.password === data.user.password){
          setLoggedIn(true)
      }
  }
  return (
    <CartProvider>
      <Container>
        <NavComponent></NavComponent>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path='success' element={<Success />} />
            <Route path='cancel' element={<Cancel />} />
            <Route path='user' element={<UserPage />} />
        </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
};

export default App;
