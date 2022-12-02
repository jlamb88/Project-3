import React, { useState } from 'react';
import UserPage from './UserPage'
import User from '../utils/seeds/Users'

const SignUp = (Users) => {

    const submitHandler =(e) => {
        e.preventDefault();
        console.log({user, e})
        localStorage.setItem(user)
        console.log('seeds', User)
        return <UserPage />
    }

    const [user, setUser] = useState([{
        firstName:"",
        lastName:"",
        street_address:"",
        city:"",
        state:"",
        zipcode:"",
        phone:"",
        email:"",
        password:""
    }])

        return(
            <form onSubmit={submitHandler} class="sign-up">
                <div class="form">
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" onChange={e => setUser({...user, firstName: e.target.value})} value={user.firstName} />
                </div>
                <div class="form">
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" onChange={e => setUser({...user, lastName: e.target.value})} value={user.lastName} />
                </div>
                <div class="form">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" onChange={e => setUser({...user, email: e.target.value})} value={user.email} />
                </div>
                <div class="form">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" onChange={e => setUser({...user, password: e.target.value})} value={user.password} />
                </div>
                <div class="form">
                    <label htmlFor="phone">Phone: </label>
                    <input type="tel" name="phone" onChange={e => setUser({...user, phone: e.target.value})} value={user.phone} />
                </div>
                <div class="form">
                    <label htmlFor="street_address">Street Address: </label>
                    <input type="text" name="street_address" onChange={e => setUser({...SignUp, streetAddress: e.target.value})} value={user.streetAddress} />
                </div>
                <div class="form">
                    <label htmlFor="city">City: </label>
                    <input type="text" name="city" onChange={e => setUser({...user, city: e.target.value})} value={user.city} />
                </div>
                <div class="form">
                    <label htmlFor="state">State: </label>
                    <input type="text" name="state" onChange={e => setUser({...user, state: e.target.value})} value={user.state} />
                </div>
                <div class="form">
                    <label htmlFor="zipcode">Zip Code: </label>
                    <input type="number" name="zipcode" onChange={e => setUser({...user, zipcode: e.target.value})} value={user.zipcode} />
                </div>
                <div class="form">
                    <input type="submit" value="Sign Up!" />
                </div>
                
            </form>
        )
}

export default SignUp