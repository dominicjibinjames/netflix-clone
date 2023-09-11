import React, { useState } from 'react';
import netflixLogo from '../netflix-logo.png';
import './LoginScreen.css';
import SigninScreen from './SigninScreen';

function LoginScreen() {

    const [signIn, setSignIn] = useState(false);

    return (

        <div className="loginScreen">
            <div className="loginScreen_background">
                <img onClick={() => setSignIn(false)}
                    className="loginScreen_logo"
                    src={netflixLogo}
                    alt="netflix-logo"
                />
                <button onClick={() => setSignIn(true)}
                    className="loginScreen_button">Sign In</button>

                <div className="loginScreen_gradient"/>

                <div className="loginScreen_body">

                    {signIn ? (
                        
                        <SigninScreen />

                    ) : (
                    <>
                     <h1>Unlimited films, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="loginScreen_input">
                        <form>
                            <input type="email" placeholder="Email Address"
                            />
                            <button onClick={() => setSignIn(true)}
                                className="loginScreen_getStarted">GET STARTED</button>
                        </form>
                     </div>
                     </>
                     )}
                    
            </div>

            </div>

        </div>
        
        );
}

export default LoginScreen;