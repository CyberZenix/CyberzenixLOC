import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";  
import { auth } from "../firebase.js";
import { db } from "../firebase.js";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    async function googleSignIn(){
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }


    async function register(email,password, username, age, qualification, school){
        let uid = '';   
        const res = await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          uid = user.uid;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error Signing you in: ",errorMessage);
          // ..
        });
        
        try {
            console.log("Consolidating Data......");
            await setDoc(doc(db,"Users",uid),{
                Age: age,
                Email: email,
                Qualification: qualification,
                School: school,
                User_id: uid,
                Username: username
               })
        } catch (error) {
            console.log("Error adding data to Database: ",error);
        }finally{
            console.log("Data Added Successfully");
        }
    }

    async function login(email,password){
        try {
            const res = await signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
                const user = userCredential.user;
                uid = user.uid;
              });    
        } catch (error) {
            console.log("Error logging in: ",error);
        }        
    }

    const logOut = () => {
        signOut(auth);
      };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return () => unsubscribe();
      }, [user]);
    
    return (
    <AuthContext.Provider value={{ user, register, login, googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );

  
};

export const UserAuth = () => {
  return useContext(AuthContext);
}