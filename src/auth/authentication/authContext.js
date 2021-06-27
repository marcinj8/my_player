import React from "react";

const AuthContext = React.createContext({
    fullName: '',
    accountType: '',
    token: '',
    tokenExpiration: '',
    login: ()=>{},
    logout: ()=>{}
});

export default AuthContext;