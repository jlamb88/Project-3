

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