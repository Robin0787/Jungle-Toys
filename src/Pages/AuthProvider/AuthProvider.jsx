
import React, { createContext, useState } from 'react';
const authContext = createContext(null);


const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    


    const info = {}
    return (
        <authContext.Provider value={info}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;