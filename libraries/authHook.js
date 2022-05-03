import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase";

export default function useAuth() {
  const [signIn, setSignIn] = useState(false);
  const [uid, setUid] = useState("null");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setSignIn(true);
      setUid(user?.uid);
    } else {
      setSignIn(false);
      setUid(null);
    }
  });

  return { signIn, uid };
}
