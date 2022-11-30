import React, { useState } from 'react';

const [SignUp, setSignUp] = () => {

    const user = useState({
        first_name:"",
        last_name:"",
        street_address:"",
        city:"",
        state:"",
        zipcode:"",
        phone:"",
        email:"",
        password:""
    })

    return(
        <div>
            <div>
                <label htmlFor="first_name">First Name: </label>
                <input type="text" name="first_name" onChange={e => setSignUp({...SignUp, first_name: e.target.value})} value={SignUp.first_name} />
            </div>
            <div>
                <label htmlFor="last_name">Last Name: </label>
                <input type="text" name="last_name" onChange={e => setSignUp({...SignUp, last_name: e.target.value})} value={SignUp.last_name} />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" onChange={e => setSignUp({...SignUp, email: e.target.value})} value={SignUp.email} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange={e => setSignUp({...SignUp, password: e.target.value})} value={SignUp.password} />
            </div>
            <div>
                <label htmlFor="phone">Phone: </label>
                <input type="tel" name="phone" onChange={e => setSignUp({...SignUp, phone: e.target.value})} value={SignUp.phone} />
            </div>
            <div>
                <label htmlFor="street_address">Street Address: </label>
                <input type="text" name="street_address" onChange={e => setSignUp({...SighnUp, last_name: e.target.value})} value={SignUp.street_address} />
            </div>
            <div>
                <label htmlFor="city">City: </label>
                <input type="text" name="city" onChange={e => setSignUp({...SignUp, city: e.target.value})} value={SignUp.city} />
            </div>
            <div>
                <label htmlFor="state">State: </label>
                <input type="text" name="state" onChange={e => setSignUp({...SignUp, state: e.target.value})} value={SignUp.state} />
            </div>
            <div>
                <label htmlFor="zipcode">Zip Code: </label>
                <input type="number" name="zipcode" onChange={e => setSignUp({...SignUp, zipcode: e.target.value})} value={SignUp.zipcode} />
            </div>

            
        </div>
    )
}