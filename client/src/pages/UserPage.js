import React, {useState} from 'react'
import Button from 'react-bootstrap/esm/Button'
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
            setError("")
        }
    }

    const logout =() => {
        console.log("logout")
        
        setUser({email:"", loggedIn:false})
    }

    return (
        <div>
            {(user.email !== "") ? (
                <div>
                    <h1 className='welcome'>Welcome!</h1>
                    <h3 className='orderHistory'>Order History: </h3>
                    <div>
                        <Button className='formButton' variant="secondary" type="submit" onClick={logout}>Logout</Button>
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