import { useContext } from "react";
import styles from "./greetings.module.css";
import { AuthContext } from "../../pages/_app";

export default function Greetings() {
  const { name } = useContext(AuthContext);

  return (
    <div className={styles.greetings_container}>
      <h2>Welcome, {name}</h2>
    </div>
  );
}
