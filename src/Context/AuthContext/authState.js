import React, { useState, useEffect } from 'react';
import { getAccessToken, removeAccessToken, setAccessToken } from '../../Storage';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../../Redux/Auth/authSlice';
import AuthContext from './index';
import { userDetails } from '../../Api/auth';

const AuthState = (props) => {
    // const dispatch = useDispatch();

    const [userToken, setUserToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        checkAuthenticationStatus()
    }, [])

    const checkAuthenticationStatus = async () => {
        try {
            const token = await getAccessToken();
            const user = await userDetails();
            console.log('checkAuthenticationStatus ', token, user);
            // dispatch(setUser({ user }));
            setUserToken(token);
        } catch (err) {
        }
        setIsLoading(false)
    }

    const onAuthentication = async (token) => {
        await setAccessToken(token);
        const user = await userDetails();
        console.log('onAuthentication ', token, user);
        // dispatch(setUser({ user }));
        setUserToken(token);
    }

    const userSignOut = async () => {
        await removeAccessToken();
        setUserToken(null);
    }

    return (
        <AuthContext.Provider
            value={{
                onAuthentication,
                userToken,
                isLoading,
                userSignOut,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;