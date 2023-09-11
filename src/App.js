import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { login, logout, selectUser } from './features/counter/userSlice';
import { auth } from './firebase';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import { useNavigate } from 'react-router-dom';

function App() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                dispatch(
                    login({
                        uid: userAuth.uid,
                        email: userAuth.email,
                    })
                );
            }
            else {
                dispatch(logout());
            }
        })

        return unsubscribe;

    }, [dispatch]);

  return (
      <div className="App">
          
        {!user ? (
              <LoginScreen navigate={navigate} />
          ) : (
                  <>
                   <Routes>
                      <Route
                           exact path="/"
                           element={<HomeScreen />}
                      />
                      <Route
                          exact path="/profile"
                          element={<ProfileScreen/>}

                      />
                      <Route
                          exact path="/signup"
                          element={<SignupScreen/>}
                      />
                      <Route
                          exact path="/signin"
                          element={<SigninScreen/>}
                      />
                      </Routes>
                  </>
                       )
          }
          
    </div>
  );
}

export default App;
