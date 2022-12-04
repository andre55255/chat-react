import React, { useState, createContext } from "react";

export const userInfoContext = createContext({});

export const UserInfoProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({
        firstname: "",
        lastname: "",
        login: ""
    });

    return (
        <userInfoContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </userInfoContext.Provider>
    );
}