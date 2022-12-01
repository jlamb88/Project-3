// import React, { useState } from 'react';
// import LoginForm from '../components/LoginForm';
// // import Queries from '../components/Queries'

// const UserPage = details =>{

//     const admin = {email:"admin@admin.com", password:"admin"}
//     const [user, setUser] = useState({name:"", email:""});

//     const Login = details => {
//         console.log(details)
        
//         if (details.email === admin.email && details.password === admin.password){
//             console.log("logged In!")

//           }
          
//           const Logout = () => {
//               setUser({...user})
//           }
        
        
//     if (details.email===admin.email && details.password === admin.password){

//         return(
//             <div>
//                 {        setUser({
//             name:details.name,
//             email:details.email
//         })}
//                 <LoginForm Login={Login} />
//             </div>
//         )
//     }else{
//         return(
//                 <div>
//                     {/* <div className="welcome">
//                         <h2>Welcome, <span>{user.first_name}!</span></h2>
//                         <button onClick={Logout} >Logout</button>
//                     </div>
//                     <div>
//                         <h3>{user.first_name} {user.last_name}</h3>
//                         <p>{user.payment.card_type}  {user.payment.expiration}</p>
//                         {/* <p>**** **** **** {lastFour}</p> }
//                     </div> */}
//     <h1>IT WORKS!!!</h1>
//                 </div>)
//     }
// }
// }

// export default UserPage;

import React, {useState} from 'react'
import LoginForm from '../components/LoginForm'

const UserPage = () => {

    const admin = {
        email:'admin@admin.com',
        password:"admin"
    }

    const [user, setUser] = useState({email:"", loggedIn:false})
    const [error, setError] = useState('')

    const Login = (details) => {
        console.log(details)

        if (details.email === admin.email && details.password === admin.password){
            console.log('LoggedIn!')
            setUser({
                email:details.email,
                loggedIn:true
            })
        }else{
            console.log('details dont match')
            setError("User Not Found")
        }
    }

    const Logout =() => {
        console.log("logout")
        
        setUser({email:"", loggedIn:false})
    }

    return (
        <div>
            {(user.email !== "") ? (
                <div>
                    <h1>Welcome!</h1>
                    <div>
                        <button onClick={Logout} value="Logout" />
                    </div>
                </div>
            ) :(
                <LoginForm Login={Login} error={error}/>
            )
            }
        </div>
    )
}

export default UserPage