import styles from "./create.module.css";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

const menu = [
  { name: <AddAlertIcon />, placeholder: "Create New Announcement" },
  { name: <PlaylistAddIcon />, placeholder: "Create New Todo" },
  { name: <AssignmentIcon />, placeholder: "Create New Assignement" },
  { name: <PersonAddAltIcon />, placeholder: "Create New Personal Todo" },
];

export default function Menu({ show }) {
  let delay = -0.2;

  return (
    <div className={styles.menu_container}>
      {menu.map(({ name, placeholder }) => {
        delay = delay + 0.2;

        return (
          <button
            className={styles.menu_btn}
            style={{ animationDelay: `${delay}s` }}
            data-toggle="tooltip"
            title={placeholder}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
}
