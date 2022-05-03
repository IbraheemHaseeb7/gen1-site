import { useContext, useReducer } from "react";
import styles from "./admin.module.css";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../libraries/firebase";
import { AuthContext } from "../_app";
import Link from "next/link";

function reducer(state, action) {
  switch (action.type) {
    case "typing":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case "typed":
      return {
        ...state,
        email: "",
        password: "",
      };
  }
}

export default function index() {
  const [state, dispatch] = useReducer(reducer, {
    email: null,
    password: null,
  });
  const { signIn } = useContext(AuthContext);

  async function sign(e) {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, state.email, state.password).then(
      (res) => {
        console.log(res);
      }
    );

    dispatch({ type: "typed" });
  }

  function handleChange(e) {
    dispatch({
      type: "typing",
      payload: { name: e.target.name, value: e.target.value },
    });
  }

  return (
    <div className={styles.admin_container}>
      {!signIn ? (
        <div className={styles.login_container}>
          <h2 className={styles.title}>Sign In With your Credentials</h2>
          <form className={styles.form}>
            <input
              className="input"
              value={state.email}
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              className="input"
              value={state.pass}
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <button className="btn" type="button" onClick={sign}>
              Sign In
            </button>
          </form>
        </div>
      ) : (
        <div className={styles.logout_container}>
          <h2>Welcome, Back</h2>
          <Link href="/admin/home">
            <button className="btn" type="button">
              Go to Portal
            </button>
          </Link>
          <button className="btn" type="button" onClick={() => signOut(auth)}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
