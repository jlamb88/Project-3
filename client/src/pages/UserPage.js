import React, {useState} from 'react'
import LoginForm from '../components/LoginForm'
import User from '../utils/seeds/Users'

const UserPage = () => {

    const admin = {
        email:'admin@admin.com',
        password:"admin"
    }

    const [user, setUser] = useState({email:"", loggedIn:false})
    const [error, setError] = useState('')

    const Login = (details) => {
        console.log(details)
        var i = User.length
        while(i --){
            if (details.email === User[i].email && details.password === User[i].password){
                console.log('LoggedIn!')
                setUser({
                    firstName: User[i].firstName,
                    lastName: User[1].lastName,
                    streetAddress: User[i].streetAddress,
                    city:User[i].city,
                    state: User[i].state,
                    zipcode: User[i].zipcode,
                    phone: User[i].phone,
                    email:User[i].email,
                    loggedIn:true
                })
                console.log('user', user)
            }else{
                console.log('details dont match')
                setError("User Not Found")
            }}
    }

    const Logout =() => {
        console.log("logout")
        
        setUser({email:"", loggedIn:false})
    }

    return (
        <div className='user-page'>
            {(user.loggedIn === true) ? (
                <div>
                    <h1>Welcome!</h1>
                    <div className='userInfo'>

                    </div>
                    <div>
                        <button className='button' onClick={Logout} value="Logout">Logout</button>
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