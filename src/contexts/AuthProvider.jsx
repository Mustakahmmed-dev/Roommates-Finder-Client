import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { AuthContext } from "./AuthContext"
import { auth } from "../firebase/firebase.config"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(loading, user)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const updateUser = (updatedUser) => {
        return updateProfile(auth.currentUser, updatedUser);
    };
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = () => {
        return signOut(auth);
    }

    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
        .then(result => {
        toast.success("Login successful!")
        }).catch(error => {
            toast.error(error.message)
        })
    }
    
    useEffect(() => {
        const loggedUser = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            loggedUser();
        }
    }, [])

    const userInfo = {
        user,
        setUser,
        createUser,
        updateUser,
        signInUser,
        logOutUser,
        handleGoogleLogin,
        loading,
        setLoading
    }

    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
}

export default AuthProvider;