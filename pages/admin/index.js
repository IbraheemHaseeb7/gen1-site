import { useReducer } from "react";
import styles from "./admin.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../libraries/firebase";

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

  async function signIn(e) {
    e.preventDefault();
    await createUserWithEmailAndPassword(
      auth,
      state.email,
      state.password
    ).then((res) => {
      console.log(res);
    });

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
      <div className={styles.login_container}>
        <h2 className={styles.title}>Sign In With your Credentials</h2>
        <form>
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
          <button className="btn" type="button" onClick={signIn}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
