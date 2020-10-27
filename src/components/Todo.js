import React, { useState } from "react";
import Inputform from "./Inputform";
import { CgAdd } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { todoAdd, todoDelete, todoToggle } from "../Redux/Action/index";
import List from "./List";
import "./Todo.css";

function Todo() {
  // const [todos, setTodos] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  //adding todo

  const todoState = useSelector((state) => state.todos);
  const addTodo = (todo) => {
    // console.log(todo,"DDDDDDDDDDD")
    dispatch(todoAdd(todo));
  };

  // console.log(todoState.todoDataList,"WWWWWWWWWW")
  // Delete Function
  const dltFunc = (id) => {
    dispatch(todoDelete(id));
  };

  //status
  const changeStatus = (todoId) => {
    dispatch(todoToggle(todoId));
    console.log(todoId)
  };

  return (
    <div className="maindiv">
      <div className="top">
        
        <h1>Today</h1>
        
        <span className="btn">
          <CgAdd className="plus" size="25px" onClick={handleShow} />
        </span>
     </div>

      <Inputform
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        addTodo={addTodo}
      />

      <div className="content">
        <div>
          <ul>
            {todoState.todoDataList?.map((todo, id) => {
              return (
                <List
                  key={id}
                  index={id}
                  todos={todo}
                  statusTodo={changeStatus}
                  delTodo={dltFunc}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
