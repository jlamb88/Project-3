import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';


const Login = (props) => {
    const [details, setDetails] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setDetails({
        ...details,
        [name]: value,
      });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(details);
      try {
        const { data } = await login({
          variables: { ...details },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      setDetails({
        email: '',
        password: '',
      });
    };

return (
    <div className='login-page'>
        {(error !== "") ? (<div className="error">{error}</div>) : "" }
        <form onSubmit={handleFormSubmit}>
        <h2>Login</h2>
        <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email" onChange={handleChange} />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" onChange={handleChange} />
        </div>
        <div className="form-group">
            <input type="submit" value="Login" />
        </div>
        </form>
    </div>
)
}
export default Login