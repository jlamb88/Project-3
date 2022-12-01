import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
// import Queries from '../components/Queries'

const UserPage = details =>{

    const admin = {email:"admin@admin.com", password:"admin"}
    const [user, setUser] = useState({name:"", email:""});

    const Login = details => {
        console.log(details)
        
        if (details.email === admin.email && details.password === admin.password){
            console.log("logged In!")
            setUser({
                name:details.name,
                email:details.email
            })}
          }
          
          const Logout = () => {
              setUser({...user})
          }
        
        
    if (details.email===admin.email && details.password === admin.password){
        return(
            <div>
                <LoginForm Login={Login} />
            </div>
        )
    }else{
        return(
                <div>
                    {/* <div className="welcome">
                        <h2>Welcome, <span>{user.first_name}!</span></h2>
                        <button onClick={Logout} >Logout</button>
                    </div>
                    <div>
                        <h3>{user.first_name} {user.last_name}</h3>
                        <p>{user.payment.card_type}  {user.payment.expiration}</p>
                        {/* <p>**** **** **** {lastFour}</p> }
                    </div> */}
    <h1>IT WORKS!!!</h1>
                </div>)
    }

   

}

export default UserPage;