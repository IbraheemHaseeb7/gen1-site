import styles from "./create.module.css";
import ReactMarkdown from "react-markdown";

export default function Preview({ content }) {
  return (
    <div className={styles.preview_container}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
