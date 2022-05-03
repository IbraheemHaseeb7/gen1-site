import Greetings from "../../../componenets/adminGreeting/Greetings";
import Create from "../../../componenets/create/create";
import Options from "../../../componenets/options/options";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <Greetings />
      <Options />
      <Create />
    </div>
  );
}
