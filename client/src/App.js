//DEPENDENCIES
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//PAGES
import Home from './pages/Home';
import UserPage from './pages/UserPage';
// import SignUp from './pages/SignUp';

//CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

//COMPONENTS
import Store from './pages/Store';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import CartProvider from './CartContext';
import NavComponent from './components/Navbar/Navbar';


function App() {
  const adminUser = {email:"admin@admin.com", password:"admin"}
  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");




  const Login = details => {
    console.log(details)
      if (details.email === adminUser.email && details.password === adminUser.password){
    console.log("logged In!")
    setLoggedIn(true)
    setUser({
        name:details.name,
        email:details.email
    })}
  }
  
  const Logout = () => {
      setUser({...user})
  }

  return (
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
            {/* <Route path='/signup' element={<SignUp />} /> */}
 					</Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
};

export default App;
