import useAuth from "../libraries/authHook";
import "../styles/globals.css";
import React from "react";
import useAccount from "../libraries/accountHook";

export const AuthContext = React.createContext({
  signIn: null,
  name: null,
  photo: null,
  uid: null,
});

function MyApp({ Component, pageProps }) {
  const { signIn, uid } = useAuth();
  const { name, photo } = useAccount();

  return (
    <AuthContext.Provider value={{ signIn, name, photo, uid }}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default MyApp;
