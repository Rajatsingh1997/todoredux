import { todo_Add, todo_Delete, todo_Toggle } from "../Constant";

const initialTodoState = {
  isLoading: false,
  isSuccess: false,
  todoDataList: [],
};

export const todos = (state = initialTodoState, action) => {
  
    switch (action.type) {
    case todo_Add: {
      return {
        ...state,
        todoDataList: [
          ...state.todoDataList,
          {
            status: false,
            todoText: action.payload,
            id: Math.random(),
          },
        ],
      };
    }

    case todo_Delete: {
      return {
        ...state,
        todoDataList: state.todoDataList.filter(
          (item) => item.id !== action.payload
        ),
      };
    }

    case todo_Toggle: {
      return {
        ...state,
        todoDataList: state.todoDataList.map((item) => {
          if (item.id === action.payload) {
            return { ...item, status: !item.status };
          } else {
            return item;
          }
        }),
      };
    }

    default: {
      return state;
    }
  }
};
