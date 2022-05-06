import styles from "./create.module.css";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import React, { useReducer } from "react";
import Popup from "../popup/popup";
import Announcement from "./forms/announcement";
import Todo from "./forms/todo";
import Options from "./forms/options";
import PeopleIcon from "@mui/icons-material/People";

function reducer(state, action) {
  switch (action.type) {
    case "clicked":
      const value = action.payload.value === "true";

      return {
        ...state,
        [action.payload.name]: !value,
      };

    case "close":
      return {
        ...state,
        [action.payload.name]: false,
      };
  }
}

export default function Menu({ show }) {
  let delay = -0.2;

  const [state, dispatch] = useReducer(reducer, {
    announcement: false,
    todo: false,
    personalTodo: false,
    assignment: false,
    meeting: false,
  });

  function handleClicks(e) {
    dispatch({
      type: "clicked",
      payload: { name: e.target.name, value: e.target.value },
    });
  }

  const menu = [
    {
      name: <AddAlertIcon />,
      placeholder: "Create New Announcement",
      show: state.announcement,
      otherName: "announcement",
    },
    {
      name: <PlaylistAddIcon />,
      placeholder: "Create New Todo",
      show: state.todo,
      otherName: "todo",
    },
    {
      name: <AssignmentIcon />,
      placeholder: "Create New Assignement",
      show: state.assignment,
      otherName: "assignment",
    },
    {
      name: <PersonAddAltIcon />,
      placeholder: "Create New Personal Todo",
      show: state.personalTodo,
      otherName: "personalTodo",
    },
    {
      name: <PeopleIcon />,
      placeholder: "Create New Meeting",
      show: state.meeting,
      otherName: "meeting",
    },
  ];
  return (
    <div className={styles.menu_container}>
      {state.announcement && (
        <Popup
          name={`announcement`}
          title={`Make an Announcement`}
          dispatch={dispatch}
        >
          <Announcement />
        </Popup>
      )}
      {state.assignment && (
        <Popup
          name={`assignment`}
          title={`Make an Assignment`}
          dispatch={dispatch}
        >
          <Todo
            placeholder={`Enter someone's assignment here...`}
            title={`Set someone's assigment using Markdown Rules`}
          >
            <Options />
          </Todo>
        </Popup>
      )}
      {state.todo && (
        <Popup name={`todo`} title={`Make a Todo for Team`} dispatch={dispatch}>
          <Todo
            placeholder={`Enter the team's todo here...`}
            title={`Set team's todo`}
          />
        </Popup>
      )}
      {state.meeting && (
        <Popup
          name={`meeting`}
          title={`Make a new Meeting`}
          dispatch={dispatch}
        >
          <Todo
            placeholder={`Enter the meeting's details and link using the rules...`}
            title={`Set team's Meeting`}
          />
        </Popup>
      )}
      {state.personalTodo && (
        <Popup
          name={`personalTodo`}
          title={`Make an Personal Todo`}
          dispatch={dispatch}
        >
          <Todo
            placeholder={`Enter your own todo here...`}
            title={`Set Your own Personal Todo here`}
          />
        </Popup>
      )}
      {menu.map(({ name, placeholder, show, otherName }) => {
        delay = delay + 0.2;

        return (
          <button
            className={styles.menu_btn}
            style={{ animationDelay: `${delay}s` }}
            data-toggle="tooltip"
            title={placeholder}
            onClick={handleClicks}
            value={show}
            name={otherName}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
}
