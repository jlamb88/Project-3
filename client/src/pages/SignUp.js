import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const SignUp = () => {

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        streetAddress:'',
        city:'',
        state:'',
        zipcode:'',
        phone:'',
        email: '',
        password: '',
      });
      const [addUser, { error, data }] = useMutation(ADD_USER);
    
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    
      const submitHandler = async (event) => {
        event.preventDefault();
        console.log(formState);
    
        try {
          const { data } = await addUser({
            variables: { ...formState },
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      };

        return(
            <div>
                {data ?(
                    <Link to='/user'> User Page!</Link> 
                ):(
            <form onSubmit={submitHandler} class="sign-up">
                <div class="form">
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" onChange={handleChange} />
                </div>
                <div class="form">
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" onChange={handleChange} />
                </div>
                <div class="form">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" onChange={handleChange} />
                </div>
                <div class="form">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" onChange={handleChange} />
                </div>
                <div class="form">
                    <label htmlFor="phone">Phone: </label>
                    <input type="tel" name="phone" onChange={handleChange} />
                </div>
                <div class="form">
                    <label htmlFor="streetAddress">Street Address: </label>
                    <input type="text" name="streetAddress" onChange={handleChange} />
                </div>
                <div class="form">
                    <label htmlFor="city">City: </label>
                    <input type="text" name="city" onChange={handleChange} />
                </div>
                <div class="form">
                    <label htmlFor="state">State: </label>
                    <input type="text" name="state" onChange={handleChange} />
                </div>
                <div class="form">
                    <label htmlFor="zipcode">Zip Code: </label>
                    <input type="number" name="zipcode" onChange={handleChange} />
                </div>
                <div class="form">
                    <input type="submit" value="Sign Up!" />
                </div>
                
            </form>
            
        )}
         {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
                </div>
                )}
        </div>
)}


export default SignUp