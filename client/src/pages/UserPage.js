import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
// import Queries from '../components/Queries'

const adminUser = {email:"admin@admin.com", password:"admin"}

const UserPage = () => {
    // const data = Queries
    // const details = LoginForm.details
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState({name:"", email:""});
    const [error, setError] = useState("");
//     const handleLoggedIn = () => {
//         if (details.email === data.user.email && details.password === data.user.password){
//             setLoggedIn(true)
//         }
// }
    const UserPage = details =>{
        console.log(details)

        if (details.email === adminUser.email && details.password === adminUser.password){
        console.log("logged In!")
        setLoggedIn(true)
        setUser({
            name:details.name,
            email:details.email
        })}
    if (loggedIn===true){
        return(
          <div>
              {(user.email !=="") ? (
                <div>

                </div>
              ):(
                  <div>
                      <LoginForm UserPage={UserPage} error={error} />
                  </div>
              )}
          </div>
      )
    } else {
        console.log('Information Does not match')
        setError("Information does not match")
    }}

    const Logout = () => {
        setUser({email:"", password:""})
    }

    return(
        <div>
            {(user.email !=="") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.email}!</span></h2>
                    <button onClick={Logout} >Logout</button>
                </div>
            ):(
                <div>
                    <LoginForm UserPage={UserPage} error={error} />
                </div>
            )}
        </div>
    )
            }

export default UserPage;