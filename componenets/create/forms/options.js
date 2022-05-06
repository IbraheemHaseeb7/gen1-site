import { useState } from "react";
import styles from "./forms.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DeleteIcon from "@mui/icons-material/Delete";

const options = [
  { name: "Ibraheem Bin Haseeb", value: "ibraheemhaseeb7@gmail.com" },
  { name: "Sheraz Shahzad", value: "shezework@gmail.com" },
  { name: "Abdullah Sajjad", value: "shezework@gmail.com" },
  { name: "Ahmed Tariq", value: "shezework@gmail.com" },
  { name: "Ahmed Zafar", value: "shezework@gmail.com" },
];

export default function Options({ dispatch, state }) {
  const [show, setShow] = useState(false);
  const members_show = state.option.length === 0;

  function handleClick(e) {
    e.preventDefault();

    setShow(!show);
  }

  function handleOption(e) {
    e.preventDefault();

    dispatch({
      type: "option",
      payload: { value: e.target.value, name: e.target.name },
    });
  }

  function deleteThis(e) {
    dispatch({ type: "delete_option", payload: e.target.name });
  }

  return (
    <div
      className={styles.options_container}
      style={show ? { height: "15rem" } : { height: "auto" }}
    >
      <div className={styles.options} onClick={handleClick}>
        <h3>Select users</h3>
        <button
          className={styles.dropdown_btn}
          type="button"
          style={
            show
              ? { transform: "rotateZ(180deg)" }
              : { transform: "rotateZ(0deg)" }
          }
        >
          <ArrowDropDownIcon />
        </button>
        <div style={show ? { display: "flex" } : { display: "none" }}>
          {options.map(({ name, value }) => {
            return (
              <button value={value} onClick={handleOption} name={name}>
                {name}
              </button>
            );
          })}
        </div>
      </div>
      {!members_show && (
        <div className={styles.members_container}>
          {state.option.map(({ name }) => {
            return (
              <div key={name}>
                <h3>{name}</h3>
                <button type="button" onClick={deleteThis} name={name}>
                  <DeleteIcon />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
