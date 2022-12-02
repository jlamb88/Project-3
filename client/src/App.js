//DEPENDENCIES
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

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

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App(details) {

  return (
    <div className='bg-parent'>
      <ApolloProvider client={client}>
        <CartProvider>
          <Container>
            <NavComponent></NavComponent>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/store' element={<Store />} />
                <Route path='/success' element={<Success />} />
                <Route path='/cancel' element={<Cancel />} />
                <Route path='/store' element={<Store />} />
                <Route path='/user' element={<UserPage />} />
                {/* <Route path='/signup' element={<SignUp />} /> */}
                <Route path='/about' element={<About />} />
              </Routes>

            </BrowserRouter>
          </Container>
        </CartProvider>
      </ApolloProvider>
      </div>
  );
};

export default App;