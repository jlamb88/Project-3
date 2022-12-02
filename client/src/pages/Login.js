import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import UserPage from './UserPage'
import Header from '../components/Header'
import NavComponent from '../components/Navbar/Navbar';
import { Row, Col } from 'react-bootstrap'

const adminUser = { email: "admin@admin.com", password: "admin" }

const Login = ({ loggedIn, setLoggedIn }) => {
    const [user, setUser] = useState({ name: "", email: "" });
    const [error, setError] = useState("");
    const Login = details => {
        console.log(details)

        if (details.email == adminUser.email && details.password == adminUser.password) {
            console.log("logged In!")
            setUser({
                name: details.name,
                email: details.email
            })
            return (
                <div>
                    <div>
                        <Row>
                            <Col className='col-6'>
                                <Header />
                            </Col>
                            <Col className='col-6'>
                                <NavComponent />
                            </Col>
                        </Row>
                    </div>
                    {(user.email != "") ? (
                        <UserPage />
                    ) : (
                        <div>
                            <div>
                                <Row>
                                    <Col className='col-6'>
                                        <Header />
                                    </Col>
                                    <Col className='col-6'>
                                        <NavComponent />
                                    </Col>
                                </Row>
                            </div>
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
        setUser({ email: "" })
    }

    return (
        <div>
            <div>
                <Row>
                    <Col className='col-6'>
                        <Header />
                    </Col>
                    <Col className='col-6'>
                        <NavComponent />
                    </Col>
                </Row>
            </div>
            {(user.email != "") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.email}!</span></h2>
                    <button onClick={Logout} >Logout</button>
                </div>
            ) : (
                <div>
                    <div>
                        <Row>
                            <Col className='col-6'>
                                <Header />
                            </Col>
                            <Col className='col-6'>
                                <NavComponent />
                            </Col>
                        </Row>
                    </div>
                    <LoginForm Login={Login} error={error} />
                </div>
            )}
        </div>
    )
}


export default Login;