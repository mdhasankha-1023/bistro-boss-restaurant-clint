import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import Swal from "sweetalert2";
export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // provider
    const googleProvider = new GoogleAuthProvider();

    // success alert
    const successAlert = (text) => {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: `${text}`,
            showConfirmButton: false,
            timer: 1500
        })
    }

    // error alert
    const errorAlert = (text) => {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: `${text}`,
            showConfirmButton: false,
            timer: 1500
        })
    }


    // onAuthStateChange
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            const user = { email: currentUser.email};
            if(currentUser){
                fetch('http://localhost:5000/jwt',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('jwt_token', data.token)
                })
            }

            return () => {
                unSubscribe();
            }
        })
    }, [])

    // create user with email and password
    const signUp = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user's profile
    const updateUsersProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }

    // login with email and password
    const login = (email, password) => {
        // setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //-------------------------
    //  social sign-in
    // ------------------------

    // google sign-in
    const google = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // log out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        login,
        signUp,
        logOut,
        successAlert,
        errorAlert,
        google,
        updateUsersProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;