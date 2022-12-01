import React, {useState} from 'react'
import Login from '../pages/UserPage'

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({email:'', password:''})
    const submitHandler =(e) => {
        e.preventDefault();

        Login(details)
        
    }

  return (
    <div className='login-page'>
        {(error !== "") ? (<div className="error">{error}</div>) : "" }
        <form onSubmit={submitHandler}>
        <h2>Login</h2>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value= {details.email} />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value= {details.password} />
        </div>
        <div className="form-group">
            <input type="submit" value="Login" />
        </div>
        </form>
    </div>
  )
}

export default LoginForm

//  import React, {useState} from 'react'



// function LoginForm({Login, error}) {
//     const [details, setDetails] = useState({email:"", password:""})

//     const submitHandler = e =>{
//         e.preventDefault();

//         Login(details);

//     }

//   return (
//     <form onSubmit={submitHandler}>
//         <div>
//             <h2>Login</h2>
//             {/* {(error !== "") ? (<div className="error">{error}</div>) : ""} */}
//             <div className="form-group">
//                 <label htmlFor="email">Email:</label>
//                 <input type="text" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value= {details.email} />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="password">Password:</label>
//                 <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value= {details.password} />
//             </div>
//             <div className="form-group">
//                 <input type="submit" value="Login" />

//             </div>
//             <div>
//                 <h4>Don't have an account?</h4>
//                 {/* <link to="Create"><button>Click Here!</button></link> */}
//             </div>
//         </div>
//     </form>
//   )
// }

// export default LoginForm