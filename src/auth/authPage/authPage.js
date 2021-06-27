import React, { useEffect, useState, useCallback, useContext } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

import AuthContext from '../authentication/authContext';

import Login from './login';

const AuthPage = () => {
    const { userType } = useParams();

    const {login} = useContext(AuthContext);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [user, setUser] = useState(null);

    const setUserData = useCallback((userData, authData) => {
        const accountType = userType === 'guest' ? 'TRIAL' : 'MAIN';

        login(userData.FullName, accountType, authData.Token, authData.TokenExpires);

        setUser(userData);
        setLoading(false);
        setError(false);
    }, [userType, login])

    const loginUserFailed = useCallback(() => {
        setLoading(false);
        setError(true);
    }, [])

    const loginUserHandler = useCallback((data, newUser) => {
        setLoading(true);
        setError(false);
        const loginData = data;
        const link = newUser ? 'https://thebetter.bsgroup.eu/Authorization/SignIn' : 'https://thebetter.bsgroup.eu/Authorization/SignIn'; // link do rejestracji?
        axios.post(link, loginData, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => setUserData(res.data.User, res.data.AuthorizationToken))
            .catch(err => loginUserFailed(err))
    }, [loginUserFailed, setUserData])

    useEffect(() => {
        if (userType === "guest") {
            loginUserHandler({});
        }
    }, [userType, loginUserHandler])

    if (loading) {
        return <h3>loading...</h3>
    }

    if (error) {
        return <h3>please try again later</h3>
    }

    return (
        <React.Fragment>
            {
                user && userType === "guest" && (
                    <div>
                        Yoy are looged as {user.FullName}
                    </div>
                )
            }
            {
                userType === 'member' && <Login 
                    loginUser={loginUserHandler}
                />
            }
        </React.Fragment>
    )
}

export default AuthPage;