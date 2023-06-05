import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import Swal from "sweetalert2";
export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

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


    // onAuthStateChange
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
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
        updateUsersProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;