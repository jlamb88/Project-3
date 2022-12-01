import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import UserPage from './UserPage'

const adminUser = {email:"admin@admin.com", password:"admin"}

const Login = ({ loggedIn, setLoggedIn }) => {
    const [user, setUser] = useState({name:"", email:""});
    const [error, setError] = useState("");
    const Login = details =>{
        console.log(details)

        if (details.email == adminUser.email && details.password == adminUser.password){
        console.log("logged In!")
        setUser({
            name:details.name,
            email:details.email
        })
        return(
          <div>
              {(user.email !="") ? (
                <UserPage />
              ):(
                  <div>
                      <LoginForm Login={Login} error={error} />
                  </div>
              )}
          </div>
      )
    } else {
        console.log('Information Does not match')
        setError("Information does not match")
    }
}
    const Logout = () => {
        setUser({email:""})
    }

    return(
        <div>
            {(user.email !="") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.email}!</span></h2>
                    <button onClick={Logout} >Logout</button>
                </div>
            ):(
                <div>
                    <LoginForm Login={Login} error={error} />
                </div>
            )}
        </div>
    )
}
        

export default Login;