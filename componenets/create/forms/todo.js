import { doc, setDoc } from "firebase/firestore";
import React, { useReducer } from "react";
import { firestore } from "../../../libraries/firebase";
import Preview from "../preview";
import styles from "./forms.module.css";

function reducer(state, action) {
  switch (action.type) {
    case "type":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case "submit":
      return {
        ...state,
        content: "",
        due: {
          date: "",
          time: "",
        },
      };

    case "due":
      return {
        ...state,
        due: {
          ...state.due,
          [action.payload.name]: action.payload.value,
        },
      };

    case "option":
      return {
        ...state,
        option: [
          ...state.option,
          { name: action.payload.name, value: action.payload.value },
        ],
      };

    case "delete_option":
      let array = state.option;

      const new_array = array.filter((e) => {
        return e.name !== action.payload;
      });

      return {
        ...state,
        option: new_array,
      };
  }
}

export default function Todo({ placeholder, title, children }) {
  const [state, dispatch] = useReducer(reducer, {
    content: "",
    due: { date: null, time: null },
    option: [],
  });

  function handleChange(e) {
    dispatch({
      type: "type",
      payload: { name: e.target.name, value: e.target.value },
    });
  }

  function handleDue(e) {
    dispatch({
      type: "due",
      payload: { name: e.target.name, value: e.target.value },
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const id = new Date().getTime().toString();

    // await setDoc(doc(firestore, `/${type}`, id), {
    //   id: id,
    //   content: state.content,
    //   date: new Date(),
    // })

    dispatch({ type: "submit" });
  }

  // children setup
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { dispatch, state });
    }
    return child;
  });

  return (
    <form className={styles.todo_container}>
      <h1>{title}</h1>
      <h3>Set due date</h3>
      <div className={styles.due_container}>
        <label htmlFor="date">Date</label>
        <input
          className={styles.dates}
          type="date"
          id="date"
          value={state.due.date}
          name="date"
          onChange={handleDue}
        />
        <label htmlFor="time">Time</label>
        <input
          className={styles.times}
          type="time"
          id="time"
          value={state.due.time}
          name="time"
          onChange={handleDue}
        />
      </div>
      {childrenWithProps}
      <textarea
        className="textarea"
        placeholder={placeholder}
        onChange={handleChange}
        value={state.content}
        name="content"
      ></textarea>
      <Preview content={state.content} />
      <button className="btn" type="button" onClick={handleSubmit}>
        SUBMIT
      </button>
    </form>
  );
}
