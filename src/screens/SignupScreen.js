import React, { useRef, useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import './SignupScreen.css';
import SigninScreen from './SigninScreen';

function SignupScreen() {


    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [signIn, setSignIn] = useState(false);

    
    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword( auth,
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                alert("User successfully created")
            })
            .catch((error) => {
                alert(error.message);
            })
    }
    

    return (


        <>
            {signIn ? (

                <SigninScreen/>
            ) : (

        <div className="signupScreen">
            <form>
                <h1>Sign Up</h1>
                <input ref={emailRef} type="email" placeholder="Email or phone number" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button onClick={register} type="submit" className="signinButton"> Sign Up</button>

                <h4>
                    <span className="signupScreen_gray">Already have a account? </span>
                    <span onClick={() => setSignIn(true)} className="signupScreen_link" >Sign In now.</span>
                </h4>
            </form>

         </div>
            )}
            </>
    );
}

export default SignupScreen;