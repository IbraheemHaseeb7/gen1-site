import { useState } from "react";
import Preview from "../preview";
import styles from "./forms.module.css";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../../../libraries/firebase";

export default function Announcement() {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const id = new Date().getTime().toString();

    await setDoc(doc(firestore, `/announcements`, id), {
      id: id,
      content: value,
      date: new Date(),
    });

    setValue("");
  }

  return (
    <form className={styles.announcement_container}>
      <textarea
        placeholder="Type your announcement here..."
        className={styles.textarea_announcement}
        value={value}
        name={`content`}
        onChange={handleChange}
      ></textarea>
      <Preview content={value} />
      <button className="btn" type="button" onClick={handleSubmit}>
        SUBMIT
      </button>
    </form>
  );
}
