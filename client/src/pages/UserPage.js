import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
// import Queries from '../components/Queries'





// const UserPage = () => {
//     // const data = Queries
//     // const details = LoginForm.details
   
// //     const handleLoggedIn = () => {
// //         if (details.email === data.user.email && details.password === data.user.password){
// //             setLoggedIn(true)
// //         }
// // }
    const UserPage = details =>{
        console.log(details)
        // const [loggedIn, setLoggedIn] = useState(false)
        
        // const lastFour = user.payment.card_number.slice(-4)
      
        
        
    if (loggedIn===false){
        return(
            <div>
                <LoginForm Login={Login} />
            </div>
        )
    }else{
                        <div>
                    <div className="welcome">
                        <h2>Welcome, <span>{user.first_name}!</span></h2>
                        <button onClick={Logout} >Logout</button>
                    </div>
                    <div>
                        <h3>{user.first_name} {user.last_name}</h3>
                        <p>{user.payment.card_type}  {user.payment.expiration}</p>
                        {/* <p>**** **** **** {lastFour}</p> */}
                    </div>
                </div>
    }

   

}

export default UserPage;