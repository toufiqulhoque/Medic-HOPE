import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../Firebase/farebase.init"


initAuth();

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({})
    const [error, setError] = useState({})
    //////////////////////////////////////////////////////////////////

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isLogin, setIsLogin] = useState(false)

    /////////////////////////////////////////////////////////////////////////
    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
            }).catch((error) => {
                setError(error.message)
            });

    };
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {
                setError(error.message)
            });
    }
    /////////////////////////////////////////////////////////////////////////
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);

    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);

    }
    const handleRegistration = e => {
        e.preventDefault();
        console.log('register', email, password);
        if (password.length < 6) {
            setError('Password must be 6 charecter long')
            return;
        }
        isLogin ? processLogin(email, password) : registerNewUser(email, password)

    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('');
                verifyEmail()
                setUserName()
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(result => {

            })

    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            })
    }
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {

            })
    }







    //////////////////////////////////////////////////////////////////////////
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setError("")
            }
        });
    }, [])
    return { user, error, loginWithGoogle, logOut, handleResetPassword, setUserName, registerNewUser, processLogin, handleRegistration, handlePasswordChange, handleEmailChange, handleNameChange, toggleLogin, isLogin }
}
export default useFirebase;