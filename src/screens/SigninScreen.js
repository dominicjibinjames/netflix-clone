import React, { useRef, useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import './SigninScreen.css';
import SignupScreen from './SignupScreen';

function SigninScreen() {


    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [signUp, setSignUp] = useState(false);


    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth,
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                console.log(authUser);
            })
            .catch((error) => {
                alert(error.message);
            })
    }


    return (
        <>
        

            {signUp ? (

            <SignupScreen/>
            ) : (
            <div className="signinScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email or phone number" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button onClick={signIn} type="submit" className="signinButton"> Sign In</button>

                <h4>
                    <span className="signinScreen_gray">New to Netflix? </span>
                    <span onClick={() => setSignUp(true)}
                        className="signinScreen_link" >Sign Up now.</span>
                </h4>
             </form>
             </div>
            )}
            
            </>
    );
}

export default SigninScreen;