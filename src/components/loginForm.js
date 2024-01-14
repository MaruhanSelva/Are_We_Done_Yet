import { useState } from 'react';
import { auth } from "../helpers/firebase.js"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import "../styles/forms.css";


function LoginForm() {
    //const [name, setName] = useState("");
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //signed in
        const user = userCredential.user;
        navigate(`/userpage`)
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      })
    }

    return (
      <div className='loginPage'>
        <div className='section_title'>
          Log In
        </div>
        <form onSubmit={onLogin}>
          <label>Email
          <input 
            id="email-address"
            className='input_container'
            type="email" 
            name="email" 
            required
            placeholder='Email Address'
            onChange={(e) => setEmail(e.target.value)}
          />
          </label>
          <label>Password
            <input 
              id="password"
              className='input_container'
              type="password" 
              name="password" 
              required
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            </label>
            <input type="submit" className='submit_button' value="Log in"/>
        </form>
        <p>
          Don't have an account? {' '} 
          <NavLink to="/">
            Sign Up
          </NavLink>
        </p>
      </div>
    )
}
  

export default LoginForm;