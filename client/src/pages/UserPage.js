import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import LoginForm from '../components/LoginForm'
import Header from '../components/Header'
import NavComponent from '../components/Navbar/Navbar'
import { Row, Col } from 'react-bootstrap'
const UserPage = () => {

    const admin = {
        email: 'admin@admin.com',
        password: "admin"
    }

    const [user, setUser] = useState({ email: "", loggedIn: false })
    const [error, setError] = useState('')

    const Login = (details) => {
        console.log(details)

        if (details.email === admin.email && details.password === admin.password) {
            console.log('LoggedIn!')
            setUser({
                email: details.email,
                loggedIn: true
            })
        } else {
            console.log('details dont match')
            setError("")
        }
    }

    const logout = () => {
        console.log("logout")

        setUser({ email: "", loggedIn: false })
    }

    return (
        <div>
            <Row>
                <Col className='col-6'>
                    <Header />
                </Col>
                <Col className='col-6 mt-3'>
                    <NavComponent />
                </Col>
            </Row>
            {(user.email !== "") ? (
                <div>
                    <h1>Welcome!</h1>
                    <div>
                        <Button className='formButton' variant="secondary" type="submit" onClick={logout}>Logout</Button>
                    </div>
                </div>
            ) : (
                <LoginForm Login={Login} error={error} />
            )
            }
        </div>
    )
}

export default UserPage