import styles from "./create.module.css";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Menu from "./menu";

export default function Create() {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.create} onClick={() => setShow(!show)}>
      <AddIcon />
      {show && <Menu show={show} />}
    </div>
  );
}
