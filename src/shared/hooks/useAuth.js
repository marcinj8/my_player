import { useState, useEffect, useCallback } from "react";

let logoutTimer;

export const useAuth = () => {

    const [userData, setUserData] = useState({
        fullName: null,
        accountType: null,
        token: null,
        tokenExpiration: null
    });

    const login = useCallback((fullName, accountType, token, tokenExpiration) => {
        const userDataUpdated = {
            fullName,
            accountType,
            token,
            tokenExpiration
        };
        localStorage.setItem('userData', JSON.stringify({
            fullName,
            token,
            tokenExpiration,
            accountType: accountType
        }))
        
        setUserData(userDataUpdated);
    }, []);

    const logout = useCallback(() => {
        setUserData({
            fullName: null,
            accountType: null,
            token: null,
            tokenExpiration: null
        });

        localStorage.removeItem('userData');
    }, []);

    useEffect(() => {
        if (userData.token && userData.tokenExpiration) {
            const remainingTime = new Date(userData.tokenExpiration).getTime() - new Date().getTime();
            logoutTimer = setTimeout(logout, remainingTime);
        } else {
            clearTimeout(logoutTimer);
        }
    }, [userData.token, logout, userData.tokenExpiration])


    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'));
        if (storedData && storedData.token && storedData.accountType && new Date(storedData.tokenExpiration) > new Date()) {
            login(storedData.fullName, storedData.accountType, storedData.token, storedData.tokenExpiration)
        }
    }, [login]);

    return { userData, login, logout }
}