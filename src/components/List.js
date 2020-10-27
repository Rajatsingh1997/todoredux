import React from "react"
import "./List.css";

function List(props) {
  console.log(props,"LLLLLLLLLl")
  return (
    <>
      <li>
        <div className= "list" >
          <div>
            <input
              type="checkbox"
              id={props.index}
              onChange={() => {
                props.statusTodo(props.todos.id);
              }}
              checked={props.todos.status}
            />
          </div>

          <div className="text">
            <p>{props.todos.todoText}</p>
          </div>

          <span className={props.todos.status ? "dot" : "dotred"}> </span>
         <span>
            <button
              className="delbtn"
              onClick={() => {
                props.delTodo(props.todos.id);
              }}
            >
              Delete
            </button>
          </span>
        </div>
        <div className="horizontal">
          <hr />
        </div>
      </li>
    </>
  );
}

export default List;
