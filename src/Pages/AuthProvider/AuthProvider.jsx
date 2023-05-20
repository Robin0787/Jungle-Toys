
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React, { createContext, useState } from 'react';
import app from "../FIrebase/Firebase.init";

export const authContext = createContext(null);


const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const continueWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const continueWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const info = {continueWithGoogle, continueWithGithub};
    return (
        <authContext.Provider value={info}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;