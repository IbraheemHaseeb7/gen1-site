import Link from "next/link";
import styles from "./options.module.css";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";

const options = [
  {
    name: "Announcements",
    id: 2,
    route: "/admin/announcements",
    icon: <AnnouncementIcon />,
  },
  {
    name: "Todos",
    id: 3,
    route: "/admin/todos",
    icon: <FormatListBulletedIcon />,
  },
  {
    name: "Assignments",
    id: 4,
    route: "/admin/assignments",
    icon: <AssignmentIcon />,
  },
  {
    name: "Personal Todo",
    id: 5,
    route: "/admin/todo",
    icon: <PersonAddAlt1Icon />,
  },
  {
    name: "Account",
    id: 6,
    route: "/admin/account",
    icon: <ManageAccountsIcon />,
  },
  {
    name: "Log Out",
    id: 7,
    route: "/admin",
    icon: <LogoutIcon />,
  },
];

export default function Options() {
  return (
    <div className={styles.options_container}>
      <img src="/gen1logo_white_text_transparent.png" className={styles.logo} />
      <div className={styles.options_inner_container}>
        {options.map(({ name, id, route, icon }) => {
          return (
            <div className={styles.option} key={id}>
              <Link href={route}>
                <div className={styles.option_name}>
                  <span className={styles.span_logo}>{icon}</span>
                  <span className={styles.span_name}>{name}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
