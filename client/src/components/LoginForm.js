import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ email: '', password: '' })
    const submitHandler = (e) => {
        e.preventDefault();

        Login(details)
    }
    return (
        <div className='login-page'>
            {(error !== "") ? (<div className="error">{error}</div>) : ""}
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}/>
                </Form.Group>
                <Button className='formButton' variant="secondary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default LoginForm;

// function LoginForm({ Login, error }) {
//     const [details, setDetails] = useState({ email: '', password: '' })
//     const submitHandler = (e) => {
//         e.preventDefault();

//         Login(details)
//     }

//     return (
//         <div className='login-page'>
//             {(error !== "") ? (<div className="error">{error}</div>) : ""}
//             <form onSubmit={submitHandler}>
//                 <h2>Login</h2>
//                 <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input type="text" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password:</label>
//                     <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
//                 </div>
//                 <div className="form-group">
//                     <input type="submit" value="Login" />
//                 </div>
//             </form>
//         </div>
//     )
// }