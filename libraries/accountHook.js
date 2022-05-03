import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import useAuth from "./authHook";
import { firestore } from "./firebase";

export default function useAccount() {
  const [name, setName] = useState(null);
  const [photo, setPhoto] = useState(null);

  const { uid, signIn } = useAuth();

  async function getData() {
    await getDoc(doc(firestore, `admins`, uid)).then((res) => {
      return setName(res.data().name);
    });
  }

  if (signIn) {
    getData();
  }

  return { name, photo };
}
