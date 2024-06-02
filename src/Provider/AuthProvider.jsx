import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext(null);
// google auth
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null)
    const [loading, setLoader] = useState(true);
    const axiosPublic = useAxiosPublic();
    

    // create user
    const createUser = (email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

      // update user profile
  const updateUserProfile = (name, photo) => {
    setLoader(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

    // login user
    const login = (email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

     // Google Login
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };


         // logOut
  const logOut = () => {
    setLoader(true)
    return signOut(auth);
  };

        // Observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){
        // get token and store client
        const userInfo = {email: currentUser.email};
        axiosPublic.post('/jwt',userInfo)
        .then(res=>{
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token);
          }setLoader(false)
        })
      }
      else{
        localStorage.removeItem('access-token');
        setLoader(false)
      }
    });
    return () => {
      unSubscribe();
    };
  }, [axiosPublic]);

   // All values
   const allValues = {
    createUser,
    user,
    setUser,
    setLoader,
    login,
    logOut,
    updateUserProfile,
    googleLogin,
    loading
}

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;