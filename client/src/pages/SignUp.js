import React, { useState } from 'react';


const SignUp = () => {
    const [user, setUser] = useState({
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
                    <input type="text" name="first_name" onChange={e => setUser({...user, first_name: e.target.value})} value={user.first_name} />
                </div>
                <div>
                    <label htmlFor="last_name">Last Name: </label>
                    <input type="text" name="last_name" onChange={e => setUser({...user, last_name: e.target.value})} value={user.last_name} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" onChange={e => setUser({...user, email: e.target.value})} value={user.email} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" onChange={e => setUser({...user, password: e.target.value})} value={user.password} />
                </div>
                <div>
                    <label htmlFor="phone">Phone: </label>
                    <input type="tel" name="phone" onChange={e => setUser({...user, phone: e.target.value})} value={user.phone} />
                </div>
                <div>
                    <label htmlFor="street_address">Street Address: </label>
                    <input type="text" name="street_address" onChange={e => setUser({...SignUp, last_name: e.target.value})} value={user.street_address} />
                </div>
                <div>
                    <label htmlFor="city">City: </label>
                    <input type="text" name="city" onChange={e => setUser({...user, city: e.target.value})} value={user.city} />
                </div>
                <div>
                    <label htmlFor="state">State: </label>
                    <input type="text" name="state" onChange={e => setUser({...user, state: e.target.value})} value={user.state} />
                </div>
                <div>
                    <label htmlFor="zipcode">Zip Code: </label>
                    <input type="number" name="zipcode" onChange={e => setUser({...user, zipcode: e.target.value})} value={user.zipcode} />
                </div>
                <div>
                    <input type="submit" value="user" />
                </div>
                
            </div>
        )
}

export default SignUp