import { useState } from 'react';
import { auth, db } from "../helpers/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection} from "firebase/firestore";
import { passValidation } from "../helpers/verification.js";
import { NavLink, useNavigate } from 'react-router-dom';
import "../styles/forms.css";


function SignUpForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPass] = useState("");
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);


    const sendData = async(uid) => {
      const docRef = await addDoc(collection(db, "Users"), {
        Name: name, 
        Email: email, 
        UID: uid, 
        GID1: "", 
        GID2: "", 
        GID3: "", 
        GID4: "", 
        GID5: ""
      });

      console.log(docRef.id);
    }

    const onSignUp = (e) => {
      e.preventDefault();
      setErrors([]);

      var err = passValidation(password, cpassword);
      setErrors(err);

      if (err.length !== 0) {
        return;
      }

    
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //signed up
        const user = userCredential.user;
        

        // Now we need to make a document in the User collection)
        sendData(user.uid);

        navigate("/userpage")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      })
    }
  
    return (
      <div className='signupPage'>
        <div className='section_title'>
          Sign Up
        </div>
        <form onSubmit={onSignUp}>
            <label> Name
              <input
              id="name"
              className='input_container'
              type="text"
              name="name"
              required
              placeholder='Name'
              onChange={(e) => setName(e.target.value)}
              />
            </label>

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

            <label>Confirm Password
              <input 
                id="cpassword"
                className='input_container'
                type="password" 
                name="cpassword" 
                required
                placeholder='Password'
                onChange={(e) => setCPass(e.target.value)}
              />
            </label>

            <div className='error_container'>
              {
                errors?.map((a) => (
                  <div className='error' key={a.id}>
                    {a.error}
                  </div>
                ))
              }
            </div>

            <input type="submit" className='submit_button' value="Sign Up"/>
        </form>
      </div>
    )
}
  

export default SignUpForm;