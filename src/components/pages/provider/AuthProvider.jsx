import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { checkPropTypes } from "prop-types";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = () => {
    return signOut(auth);
  };
  const authInfo = {
    user,
    handleRegister,
    handleLogin,
    handleLogout,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: checkPropTypes.node.isRequired, // PropTypes validation for children
};

export default AuthProvider;
