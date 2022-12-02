import React, { useState } from 'react';
import signUpForm from '../components/SignupForm';

const SignUp = () => {
    const [user, setUser] = useState({
        email:"",
        password:""
    })

        return(
            <div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" onChange={e => setUser({...user, email: e.target.value})} value={user.email} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" onChange={e => setUser({...user, password: e.target.value})} value={user.password} />
                </div>
                <div>
                    <input type="submit" value="user" />
                </div>
                
            </div>
        )
}

export default SignUp;